import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { cbQuery } from '../../queries';

class CbStrength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cbPtsAllowed: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plays.length !== this.props.plays.length) {
      let totalPassPlays = nextProps.plays.length;
      let passYards = 0;
      let passTds = 0;
      let defenders = {};
      console.log(nextProps.plays, 'plays');
      console.log(this.props.team, 'team');
      nextProps.plays.forEach(({ passPlays, touchdowns }) => {
        passPlays.forEach(({ yds, dfb }) =>  {
          if (dfb && !defenders[dfb]) {
            defenders = { ...defenders, [dfb]: { yds, totalPlays: 1 } };
          } else if (dfb) {
            let curDefender = defenders[dfb];
            curDefender = { 
              ...curDefender, 
              yds: curDefender.yds += yds, 
              totalPlays: curDefender.totalPlays++,
            };
          }
          passYards += yds;
          totalPassPlays++;
        });
        touchdowns.forEach(({ type }, i) => {
          if (type === 'REC') {
            passTds++;
          }
        });
      });
      console.log(totalPassPlays, 'passPlays');
      console.log(passYards, 'passYards');
      console.log(passTds, 'passTds');
      console.log(defenders, 'defenders');
      const passFantasyPoints = {
        passYards: passYards * 0.1,
        passScores: passTds * 6,
      };
      const totalPassFantasyPoints = passFantasyPoints.passYards + passFantasyPoints.passScores;
      const pointsPerPass = +(totalPassFantasyPoints / totalPassPlays).toFixed(2);
      this.setState({ 
        cbPtsAllowed: 
          { 
            team: this.props.team, 
            pointsPerPass,
            totalPassFantasyPoints,
          },
      });
    }
  }

  render() {
    const { cbPtsAllowed } = this.state;
    if (!cbPtsAllowed) return null;
    return (
        <div className="row">
          <h6>{cbPtsAllowed.team}</h6>
          <div>
            <br />
            <code>{cbPtsAllowed.pointsPerPass} points per pass</code>
            <br />
            <code>{cbPtsAllowed.totalPassFantasyPoints.toFixed(2)} total pass fantasy points</code>
          </div>
        </div>
      );
    }
}

function flattenPlays(away, home) {
  if (!away && !home) return [];
  let totalPlays = [...away, ...home];
  let result = [];

  for (let i = 0; i < totalPlays.length; i++) {
    if (totalPlays.length === 0) {
      result = totalPlays[i].plays;
    } else {
      result = result.concat(totalPlays[i].plays);
    }
  }
  return result.filter(({ passPlays }) => passPlays.length > 0);
}

export default graphql(cbQuery, {
  props: ({ 
    ownProps, 
    data: { 
      away, 
      home 
    } }) => ({ plays: flattenPlays(away, home) }),
  withRef: true,
})(CbStrength);