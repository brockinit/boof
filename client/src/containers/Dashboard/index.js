import React, { Component, PropTypes } from 'react';
import { nflTeams, clickedColor, unclickedColor, seasons } from '../../constants';
import { TeamFantasyPts } from '../../components';
import { flattenPlays } from '../../utils'; 
import { graphql } from 'react-apollo';
import { playQuery, scheduleQuery } from '../../queries';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const initialState = {
  defenseColor: '#039be5',
  defenseLabelColor: '#f2f2f2',
  offenseColor: '#fff',
  offenseLabelColor: '#000',
  seas: 2016,
  sortField: 'pointsPerRush',
  wks: { value: [6,7,8], label: 'Season' },
  fpPer: [],
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.changeSeason = this.changeSeason.bind(this);
    this.changeWeeks = this.changeWeeks.bind(this);
  }

  componentDidMount() {
    this.props.client.query({
      query: scheduleQuery,
      variables: {
        seas: this.state.seas,
        wk: 9,
      },
    })
    .then(({ data }) => {
      this.setState({ games: data.schedule });
    });
    nflTeams.forEach(({ team }) => {
      this.props.client.query({
        query: playQuery,
        variables: {
          seas: this.state.seas,
          wk: this.state.wks.value,
          team,
        },
      })
      .then(({ data }) => {
        const plays = flattenPlays(data.away, data.home);
        let totalRushPlays = 0;
        let totalPassPlays = 0;
        let rushYards = 0;
        let passYards = 0;
        let rushTds = 0;
        let passTds = 0;
        let totalSacks = 0;

        plays.forEach(({ rushPlays, passPlays, touchdowns, sacks }) => {
          sacks.forEach(() => totalSacks++);
          rushPlays.forEach((rush) =>  {
            rushYards += rush.yds;
            totalRushPlays++;
          });
          passPlays.forEach((pass) =>  {
            passYards += pass.yds;
            totalPassPlays++;
          });
          touchdowns.forEach((td, i) => {
            if (td.type === 'RUSH') {
              rushTds++;
            }
            if (td.type === 'REC') {
              passTds++;
            }
          });
        });
        console.log(team, 'team');
        console.log(totalRushPlays, 'rushPlays');
        console.log(totalPassPlays, 'passPlays');
        console.log(passYards, 'passYards');
        console.log(rushYards, 'rushYards');
        console.log(passTds, 'passTds');
        console.log(rushTds, 'rushTds');
        const rushFantasyPoints = {
          rushYards: rushYards * 0.1,
          rushScores: rushTds * 6,
        };
        const passFantasyPoints = {
          passYards: passYards / 25,
          passScores: passTds * 4,
        };
        const totalRushFantasyPoints = rushFantasyPoints.rushYards + rushFantasyPoints.rushScores;
        const totalPassFantasyPoints = passFantasyPoints.passYards + passFantasyPoints.passScores;
        const totalFantasyPoints = totalRushFantasyPoints + totalPassFantasyPoints;
        const pointsPerRush = +(totalRushFantasyPoints / totalRushPlays).toFixed(2);
        const pointsPerPass = +(totalPassFantasyPoints / totalPassPlays).toFixed(2);
        const game = this.state.games.find((game) => {
          return game.v === team || game.h === team;
        });
        let opponent = 'BYE';
        if (game) {
          if (game.v === team) {
            opponent = game.h;
          } else {
            opponent = game.v;
          }
        }
        this.setState({ 
          fpPer: [
            ...this.state.fpPer, 
            { 
              team,
              opponent,
              pointsPerRush, 
              pointsPerPass,
              totalPassFantasyPoints,
              totalRushFantasyPoints,
              totalFantasyPoints,
              totalSacks,
            },
          ],
        });
      });
    });
  }

  changeSeason(e, i, value) {
    this.setState({ seas: value });
  }

  changeWeeks(e, i, value) {
    if (value.length > 3) {
      this.setState({ wks: { value, label: 'Season' } });
    }
    this.setState({ wks: { value, label: 'Last 3 Weeks' } });
  }

  render() {
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
                value={seas}
                onChange={this.changeSeason}
              >
                {seasons.map(seas =>
                  <MenuItem 
                    key={seas} 
                    value={seas} 
                    primaryText={`${seas.toString()}`} 
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
                  value={[6,7,8]} 
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
