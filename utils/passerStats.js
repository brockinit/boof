// Calculating the passing yards thrown by a team during a chosen time period 
const findPasserStats = (team, year, wk1, wk2) => {
  // REST config
  const init = { method: 'GET' };

  // Global variables 
  let passYards = 0;
  let interceptions = 0;
  let passTds = 0;
  let rushingYards = 0;

  // Show entire season by default, or use user inputted restraints
  let week1 = 1;
  let week2 = 17;
  if (wk1 && wk2) {
    week1 = wk1;
    week2 = wk2;
  }

  // Perform API calls and filter results
  fetch(`http://armchairanalysis.com/api/1.0/games/${team}`, init)
    .then(response => response.json())
    .then(({data}) => data.filter(({seas, wk}) => {
      return seas === year && wk <= week2 && wk >= week1;
    }))
    .then((seasonGames) => {
      seasonGames.map(({gid, wk}) => {
        fetch(`http://armchairanalysis.com/api/1.0/teams/${gid}`, init)
          .then(response => response.json())
          .then(({data}) => {
            const { py, tdp, qby, ints } = data.find(({tname}) => tname === team);
            passYards += py;
            passTds += tdp;
            interceptions += ints;
            rushingYards += qby;
            if (wk === week2) {
              console.log(team, 'team');
              console.log(passYards, 'passYards');
              console.log(passTds, 'passTds');
              console.log(interceptions, 'interceptions');
              console.log(rushingYards, 'rushingYards');
              result.push({
                team, 
                passYards,
                passTds,
                interceptions,
                rushingYards
              });
            }
          });
      });
    })
    // Error handling
    .catch(err => console.error('An error has occurred', err));
};

const nflTeams = [
  'DEN', 'CLE', 'OAK', 'PIT', 'NE', 'GB', 'CHI', 'DET', 'KC',
  'HOU', 'NYJ', 'NYG', 'PHI', 'IND', 'BUF', 'MIA', 'WAS', 'CAR',
  'JAC', 'STL', 'SEA', 'NO', 'ARI', 'SD', 'TEN', 'TB', 'CIN',
  'BAL', 'DAL', 'ATL', 'MIN', 'SF'
];

let result = [];

setTimeout(() => {
  console.log(result.sort((a, b) => a.passYards - b.passYards), 'result');
}, 15000);

nflTeams.map(team => findPasserStats(team, 2015, 1, 3));
