import React, { Component, PropTypes } from 'react';
import { 
  nflTeams, 
  teamMetrics,
} from '../../constants';
import { TeamFantasyPts } from '../../components';
import { calculateCostToValue } from '../../utils'; 
import { fanduelQuery } from '../../queries';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';
import SelectField from 'material-ui/SelectField';
import CircularProgress from 'material-ui/CircularProgress';
import MenuItem from 'material-ui/MenuItem';

const initialState = {
  sortField: 'cToV',
  costToValueData: [],
  weeks: { value: [7,8,9,10], label: 'Season' },
  currentWk: 11,
  pos: ['QB'],
  loading: true,
};

class CostToValue extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeSortBy = this.changeSortBy.bind(this);
    this.sortResult = this.sortResult.bind(this);
  }

  componentDidMount() {
    /* Query fanduel data */
    this.props.client.query({
      query: fanduelQuery,
      variables: {
        week: this.state.weeks.value,
        pos: this.state.pos,
      },
    })
    .then(({ data: { fanDuel } }) => calculateCostToValue(fanDuel))
    .then(costToValueData => {
      console.log(costToValueData, 'costToValueData');
      this.setState({ costToValueData, loading: false }); 
    });
  }

  changeSortBy(e, i, value) {
    this.setState({ sortField: value });
  }

  sortResult(fpPer) {
    return fpPer
      .sort((a, b) => b[this.state.sortField] - a[this.state.sortField])
      .filter(({ opponent }) => opponent !== 'BYE');
  }

  render() {
    const { sortField, costToValueData, weeks, loading } = this.state;
    const sorted = this.sortResult(costToValueData);
    const playerFdStats = sorted.map((stats, i) => {
      return <div>{`${stats.name} ${stats.cToV}`}</div>
      // const { logo } = nflTeams.find(({ team }) => team === stats.team);
      // if (i === 0 || i % 3 === 0) {
      //   return (
      //     <div className="row" key={i}>
      //       <TeamFantasyPts 
      //         key={stats.team}
      //         rank={i + 1}
      //         stats={stats}
      //         avatar={logo}  />
      //     </div>
      //   );
      // }
      // return (
      //   <TeamFantasyPts 
      //     key={stats.team} 
      //     rank={i + 1}
      //     stats={stats}
      //     avatar={logo} />
      // );
    }); 
    return (
      <div className="container">
        <div className="App-header">
          <div className="row buttons">
            <div className="four columns">
              <SelectField
                floatingLabelText="Sort By"
                value={sortField}
                onChange={this.changeSortBy}
              >
                {teamMetrics.map(metric =>
                  <MenuItem 
                    key={metric} 
                    value={metric} 
                    primaryText={metric} 
                  />
                )}
              </SelectField>
            </div>
            <div className="four columns">
              <SelectField
                floatingLabelText="Weeks"
                value={weeks.label}
                onChange={this.changeWeeks}
              >
                <MenuItem  
                  value={[7,8,9,10]} 
                  primaryText="Last 3 Weeks" 
                />
                <MenuItem  
                  value={[1,2,3,4,5,6,7,8,9,10]} 
                  primaryText="Full Season" 
                />
              </SelectField>
            </div>
            <div className="four columns">
            </div>
          </div>
        </div>
        <div className="content">
          {loading ? 
          <CircularProgress 
            size={150} 
            thickness={7}
            color="black"
          /> 
          :
          <div className="cards">
            {playerFdStats}
          </div>
          }
        </div>
      </div>
    );
  }
}

CostToValue.propTypes = {
  client: PropTypes.instanceOf(ApolloClient).isRequired,
}

export default withApollo(CostToValue);
