/* Utility Functions */

/*
  * Concats plays from away and home games into a single array
*/
export function flattenPlays(away, home) {
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

/*
  * Calculates fantasy points per play metrics
*/
export function calculateFpPer(data, team, games) {
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
  const game = games.find((game) => {
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
  return {
    team,
    opponent,
    pointsPerRush, 
    pointsPerPass,
    totalPassFantasyPoints,
    totalRushFantasyPoints,
    totalFantasyPoints,
    totalSacks,
  };  
}

