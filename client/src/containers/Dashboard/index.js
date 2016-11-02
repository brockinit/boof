import React, { Component } from 'react';
import { nflTeams, clickedColor, unclickedColor, seasons } from '../../constants';
import { TeamFantasyPts } from '../../components';

import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defenseColor: '#039be5',
      defenseLabelColor: '#f2f2f2',
      offenseColor: '#fff',
      offenseLabelColor: '#000',
      seas: 2016,
      wks: { value: [1,2,3,4,5,6,7], label: 'Season' },
    };
    this.changeSeason = this.changeSeason.bind(this);
    this.changeWeeks = this.changeWeeks.bind(this);
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
    const teamStats = nflTeams.map(({ team, logo }, i) => {
      if (i === 0 || i % 3 === 0) {
        return (
          <div className="row" key={i}>
            <TeamFantasyPts 
              key={team}
              offOrDef={this.state.offOrDef}
              avatar={logo} 
              team={team} 
              seas={this.state.seas}
              wk={this.state.wks.value} />
          </div>
        );
      }
      return (
      <TeamFantasyPts 
        key={team} 
        offOrDef={this.state.offOrDef}
        team={team}
        avatar={logo} 
        seas={this.state.seas}
        wk={this.state.wks.value} />
      );
    }); 
    return (
      <div className="container">
        <div className="App-header">
          <div className="row buttons">
            <div className="four columns">
              <SelectField
                floatingLabelText="Season"
                value={this.state.seas}
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
                value={this.state.wks.label}
                onChange={this.changeWeeks}
              >
                <MenuItem  
                  value={[5,6,7]} 
                  primaryText="Last 3 Weeks" 
                />
                <MenuItem  
                  value={[1,2,3,4,5,6,7]} 
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

export default Dashboard;
