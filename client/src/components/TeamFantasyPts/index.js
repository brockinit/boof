import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class TeamFantasyPts extends Component {
  render() {
    const { stats, avatar, rank } = this.props;
    if (!stats) return null;
    return (
      <div className="four columns card">
        <Card>
          <CardHeader title={`${stats.team} (${rank})`} avatar={avatar}  />
          <CardText>
            <code><strong>Opponent ({stats.opponent})</strong></code>
            <br />          
            <code>{stats.pointsPerRush} points per rush</code>
            <br />
            <code>{stats.pointsPerPass} points per pass</code>
            <br />
            <code>{stats.totalRushFantasyPoints.toFixed(2)} total rush fantasy points</code>
            <br />
            <code>{stats.totalPassFantasyPoints.toFixed(2)} total pass fantasy points</code>
            <br />
            <code>{stats.totalFantasyPoints.toFixed(2)} total fantasy points</code>
            <br />
            <code>{stats.totalSacks} total sacks</code>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default TeamFantasyPts;
