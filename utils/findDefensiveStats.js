// Calculating the passing yards against a team's defensive unit 
const findDefensiveStats = (team, year, wk1, wk2) => {
  // REST config
  const init = { method: 'GET' };

  // Global variables 
  let passYardsAgainst = 0;
  let passTdsAgainst = 0;
  let interceptions = 0;
  let fumbles = 0;
  let sacks = 0;

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
            const { py, tdp, ints, fum, sk } = data.find(({tname}) => tname !== team);
            passYardsAgainst += py;
            passTdsAgainst += tdp;
            interceptions += ints;
            fumbles += fum;
            sacks += sk;
            if (wk === week2) {
              console.log(team, 'team');
              console.log(passYardsAgainst, 'passYardsAgainst');
              console.log(passTdsAgainst, 'passTdsAgainst');
              console.log(interceptions, 'interceptions');
              console.log(sacks, 'sacks');
              console.log(fumbles, 'fumbles');
              result.push({
                team, 
                passYardsAgainst,
                passTdsAgainst,
                interceptions,
                sacks,
                fumbles
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

const years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015
];

let result = [];
const sortProp = 'passTdsAgainst';

setTimeout(() => {
  console.log(result, 'result');
  // console.log(result.sort((a, b) => a[sortProp] - b[sortProp]), 'result');
}, 15000);
nflTeams.map(team => findDefensiveStats(team, 2015));

