import React, { Component } from 'react';
import { nflTeams } from './constants';
import { TeamFantasyPts, CbStrength } from './components';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defenseColor: '#039be5',
      defenseLabelColor: '#f2f2f2',
      offenseColor: '#fff',
      offenseLabelColor: '#000',
      offOrDef: 'def'
    };
  }
  render() {
    const teamStats = nflTeams.map(({ team, logo }, i) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <div className="row" key={i}>
            <TeamFantasyPts 
              key={team}
              offOrDef={this.state.offOrDef}
              avatar={logo} 
              team={team} 
              seas={2016}
              wk={[1,2,3,4,5,6]} />
          </div>
        );
      }
      return (
      <TeamFantasyPts 
        key={team} 
        offOrDef={this.state.offOrDef}
        team={team}
        avatar={logo} 
        seas={2016}
        wk={[1,2,3,4,5,6]} />
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
          <div className="row buttons">
            <div className="six columns">
              <RaisedButton 
                label="Offense" 
                labelColor={this.state.offenseLabelColor}
                backgroundColor={this.state.offenseColor}
              />
            </div>
            <div className="six columns">
              <RaisedButton 
                label="Defense" 
                labelColor={this.state.defenseLabelColor}
                backgroundColor={this.state.defenseColor}
              />
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

export default App;
