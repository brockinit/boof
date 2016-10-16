import React, { Component } from 'react';
import logo from './logo.svg';
import { TeamFantasyPts, CbStrength } from './components';
import AppBar from 'material-ui/AppBar';
import './App.css';

const nflTeams = [
  'DEN', 'CLE', 'OAK', 'PIT', 'NE', 'GB', 'CHI', 'DET', 'KC',
  'HOU', 'NYJ', 'NYG', 'PHI', 'IND', 'BUF', 'MIA', 'WAS', 'CAR',
  'JAC', 'LA', 'SEA', 'NO', 'ARI', 'SD', 'TEN', 'TB', 'CIN',
  'BAL', 'DAL', 'ATL', 'MIN', 'SF'
];

class App extends Component {
  render() {
    const teamStats = nflTeams.map((team, i) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <div className="row">
            <TeamFantasyPts 
              key={team} 
              team={team} 
              seas={2016}
              wk={[1,2,3,4,5]} />
          </div>
        );
      }
      return (
      <TeamFantasyPts 
        key={team} 
        team={team} 
        seas={2016}
        wk={[1,2,3,4,5]} />
      );
    }); 
    // const cbStats = nflTeams.map((team) => 
    //   <CbStrength 
    //     key={team} 
    //     team={team} 
    //     seas={2016}
    //     wk={[1,2,3,4]} />
    // );
    return (
      <div className="container">
        <div className="App-header">
          <AppBar title="Better Odds of Football" />
        </div>
        <div className="cards">
          {teamStats}
        </div>
      </div>
    );
  }
}

export default App;
