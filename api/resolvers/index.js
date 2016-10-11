import { game, defense, offense, play, rush, td, pass, sack } from '../connectors';

const resolvers = {
  games({ team }) {
    return game.findAll({ where: { v: team } }).then((result) => result);
  },
  getPlays: (gid, args) => {
    if (args.def) {
      return play.findAll({ where: { gid, def: args.def } })
      .then(result => result);
    }
    if (args.off) {
      return play.findAll({ where: { gid, off: args.off } })
      .then(result => result);
    }
    return play.findAll({ where: { gid } })
    .then(result => result);
  },
  getRushPlays: (pid) => {
    return rush.findAll({ where: { pid } })
    .then(result => result);
  },
  getSacks: (pid) => {
    return sack.findAll({ where: { pid } })
    .then(result => result);
  },
  getPassPlays: (pid) => {
    return pass.findAll({ where: { pid } })
    .then(result => result);
  },
  getTouchdownPlays: (pid) => {
    return td.findAll({ where: { pid } })
    .then(result => result);
  },
  getDefense: (gid) => {
    return defense.findAll({ where: { gid } })
    .then(result => result);
  },
  getOffense: (gid) => {
    return offense.findAll({ where: { gid } })
    .then(result => result);
  },
};

export default resolvers;
