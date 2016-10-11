import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { playQuery } from '../../queries';

class TeamFantasyPts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fpPer: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plays.length !== this.props.plays.length) {
      let totalRushPlays = 0;
      let totalPassPlays = 0;
      let rushYards = 0;
      let passYards = 0;
      let rushTds = 0;
      let passTds = 0;
      let games = 0;
      let totalSacks = 0;

      nextProps.plays.forEach(({ rushPlays, passPlays, touchdowns, sacks }) => {
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
      console.log(games, 'games');
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
      this.setState({ 
        fpPer: 
          { 
            team: this.props.team,
            pointsPerRush, 
            pointsPerPass,
            totalPassFantasyPoints,
            totalRushFantasyPoints,
            totalFantasyPoints,
            totalSacks,
          },
      });
    }
  }

  render() {
    const { fpPer } = this.state;
    if (!fpPer) return null;
    return (
        <div className="row">
          <h6>{fpPer.team}</h6>
          <div>
            <code>{fpPer.pointsPerRush} points per rush</code>
            <br />
            <code>{fpPer.pointsPerPass} points per pass</code>
            <br />
            <code>{fpPer.totalRushFantasyPoints.toFixed(2)} total rush fantasy points</code>
            <br />
            <code>{fpPer.totalPassFantasyPoints.toFixed(2)} total pass fantasy points</code>
            <br />
            <code>{fpPer.totalFantasyPoints.toFixed(2)} total fantasy points</code>
            <br />
            <code>{fpPer.totalSacks} total sacks</code>
          </div>
        </div>
      );
    }
}

function flattenPlays(away, home) {
  if (!away && !home) return [];
  let awayPlays = [];
  let homePlays = [];
  for (let i = 0; i < away.length; i++) {
    if (awayPlays.length === 0) {
      awayPlays = away[i].plays;
    } else {
      awayPlays = awayPlays.concat(away[i].plays);
    }
  }
  for (let j = 0; j < home.length; j++) {
    if (homePlays.length === 0) {
      homePlays = home[j].plays;
    } else {
      homePlays = homePlays.concat(home[j].plays);
    }
  }
  return awayPlays.concat(homePlays);
}

export default graphql(playQuery, {
  props: ({ 
    ownProps, 
    data: { 
      away, 
      home 
    } }) => ({ plays: flattenPlays(away, home) }),
  withRef: true,
})(TeamFantasyPts);