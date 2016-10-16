import React, { Component } from 'react';
import logo from './logo.svg';
import { TeamFantasyPts, CbStrength } from './components';
import AppBar from 'material-ui/AppBar';
import './App.css';
import { nflTeams } from './constants';

class App extends Component {
  render() {
    const teamStats = nflTeams.map(({ team, logo }, i) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <div className="row">
            <TeamFantasyPts 
              key={team}
              avatar={logo} 
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
        avatar={logo} 
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
