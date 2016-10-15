import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TeamFantasyPts, CbStrength } from './components';

const nflTeams = [
  'DEN', 'CLE', 'OAK', 'PIT', 'NE', 'GB', 'CHI', 'DET', 'KC',
  'HOU', 'NYJ', 'NYG', 'PHI', 'IND', 'BUF', 'MIA', 'WAS', 'CAR',
  'JAC', 'LA', 'SEA', 'NO', 'ARI', 'SD', 'TEN', 'TB', 'CIN',
  'BAL', 'DAL', 'ATL', 'MIN', 'SF'
];

class App extends Component {
  render() {
    const teamStats = nflTeams.map((team) => 
      <TeamFantasyPts 
        key={team} 
        team={team} 
        seas={2016}
        wk={[1,2,3,4,5]} />
    );
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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Better Odds of Football</h2>
        </div>
        <div>
          {teamStats}
        </div>
      </div>
    );
  }
}

export default App;
