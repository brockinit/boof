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

/* Helper function for calculateFpPer */
function findStatSums(plays) {
  let statSums = {
    totalRushPlays: 0,
    totalPassPlays: 0,
    rushYards: 0,
    passYards: 0,
    rushTds: 0,
    passTds: 0,
    totalSacks: 0,
  };

  plays.forEach(({ rushPlays, passPlays, touchdowns, sacks }) => {
    sacks.forEach(() => statSums.totalSacks++);
    rushPlays.forEach((rush) => {
      statSums.rushYards += rush.yds;
      statSums.totalRushPlays++;
    });
    passPlays.forEach((pass) => {
      statSums.passYards += pass.yds;
      statSums.totalPassPlays++;
    });
    touchdowns.forEach((td, i) => {
      if (td.type === 'RUSH') {
        statSums.rushTds++;
      }
      if (td.type === 'REC') {
        statSums.passTds++;
      }
    });
  });
  return statSums;
}

/*
  * Calculates fantasy points per play metrics
*/
export function calculateFpPer(data, team, games, wks) {
  let { away, home } = data;
  if (data.away.length + data.home.length >= wks.length) {
    const oldWeek = Math.min.apply(Math, wks);
    away = away.filter(({ wk }) => wk !== oldWeek);
    home = home.filter(({ wk }) => wk !== oldWeek);
  }
  const plays = flattenPlays(away, home);
  const {
    totalRushPlays,
    totalPassPlays,
    rushYards,
    passYards,
    rushTds,
    passTds,
    totalSacks,
  } = findStatSums(plays);

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
  console.log(team, 'team');
  console.log(totalRushPlays, 'rushPlays');
  console.log(totalPassPlays, 'passPlays');
  console.log(passYards, 'passYards');
  console.log(rushYards, 'rushYards');
  console.log(passTds, 'passTds');
  console.log(rushTds, 'rushTds');
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

