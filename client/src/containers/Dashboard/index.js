import React, { Component, PropTypes } from 'react';
import { 
  nflTeams, 
  teamMetrics,
} from '../../constants';
import { TeamFantasyPts } from '../../components';
import { flattenPlays, calculateFpPer } from '../../utils'; 
import { playQuery, scheduleQuery } from '../../queries';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const initialState = {
  defenseColor: '#039be5',
  defenseLabelColor: '#f2f2f2',
  offenseColor: '#fff',
  offenseLabelColor: '#000',
  seas: 2016,
  sortField: 'pointsPerRush',
  wks: { value: [7,8,9], label: 'Season' },
  fpPer: [],
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeSortBy = this.changeSortBy.bind(this);
    this.changeWeeks = this.changeWeeks.bind(this);
  }

  componentDidMount() {
    /* Query current schedule */
    this.props.client.query({
      query: scheduleQuery,
      variables: {
        seas: this.state.seas,
        wk: 10,
      },
    })
    .then(({ data }) => this.setState({ games: data.schedule }));

    /* Query plays for each team's games */
    nflTeams.forEach(({ team }) => {
      this.props.client.query({
        query: playQuery,
        variables: {
          seas: this.state.seas,
          wk: this.state.wks.value,
          team,
        },
      })
      .then(({ data }) => calculateFpPer(data, team, this.state.games))
      .then((statTotals) => this.setState({ fpPer: [...this.state.fpPer, statTotals] }))
    });
  }

  changeSortBy(e, i, value) {
    this.setState({ sortField: value });
  }

  changeWeeks(e, i, value) {
    if (value.length > 3) {
      this.setState({ wks: { value, label: 'Season' } });
    }
    this.setState({ wks: { value, label: 'Last 3 Weeks' } });
  }

  render() {
    console.log(this.state.sortField, 'field');
    const { sortField, fpPer, seas, wks } = this.state;
    let sorted = [];
    if (fpPer.length === 32) {
      sorted = fpPer.sort((a, b) => {
        return b[sortField] - a[sortField];
      });
    }
    const teamStats = sorted.map((stats, i) => {
      const { logo } = nflTeams.find(({ team }) => team === stats.team);
      if (i === 0 || i % 3 === 0) {
        return (
          <div className="row" key={i}>
            <TeamFantasyPts 
              key={stats.team}
              rank={i + 1}
              stats={stats}
              avatar={logo}  />
          </div>
        );
      }
      return (
        <TeamFantasyPts 
          key={stats.team} 
          rank={i + 1}
          stats={stats}
          avatar={logo} />
      );
    }); 
    return (
      <div className="container">
        <div className="App-header">
          <div className="row buttons">
            <div className="four columns">
              <SelectField
                floatingLabelText="Season"
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
                value={wks.label}
                onChange={this.changeWeeks}
              >
                <MenuItem  
                  value={[7,8,9]} 
                  primaryText="Last 3 Weeks" 
                />
                <MenuItem  
                  value={[1,2,3,4,5,6,7,8]} 
                  primaryText="Full Season" 
                />
              </SelectField>
            </div>
            <div className="four columns">
            </div>
          </div>
        </div>
        <div className="cards">
          {teamStats}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  client: PropTypes.instanceOf(ApolloClient).isRequired,
}

export default withApollo(Dashboard);
