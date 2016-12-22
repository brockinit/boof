// Calculating Passer Rating //
const passerRating = (qb) => {
// # of attempts, # of completions, passing yards, touchdown passes, interceptions 
let att = 0;
let comp = 0;  
let yds = 0; 
let td = 0; 
let int = 0;
let rating;

// 4 calculations
const a = () => {
  const part1 = comp/att - .3; 
  return part1 * 5;
};
const b = () => {
  const part1 = yds/att - 3;
  return part1 * .25;
};
const c = () => {
  const part1 = td/att;
  return part1 * 20;
};
const d = () => {
  const part1 = int/att;
  const part2 = part1 * 25;
  return 2.375 - part2;
};

//basic API call
const init = { method: 'GET' };

fetch(`http://armchairanalysis.com/api/1.0/player/${qb}/offense`, init)
  .then((response) => {
    response.json()
      .then(({data}) => {
        data.map(({pa, pc, py, ints, tdp}) => {
          att += pa;
          comp += pc;
          yds += py;
          td += tdp;
          int += ints;
        });
      })
      .then(() => {
        const part1 = a()+b()+c()+d();
        const part2 = part1/6;
        rating = part2 * 100;
      })
      .then(() => console.log(Math.round(rating), 'passerRating'));
  });
};

export default passerRating;
