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
