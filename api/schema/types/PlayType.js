import { attributeFields, resolver } from 'graphql-sequelize';
import { play, pass, rush, sack, td } from '../../connectors';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import assign from 'lodash/assign';
import RushType from './RushType';
import PassType from './PassType';
import SackType from './SackType';
import TouchdownType from './TouchdownType';

play.passPlays = play.hasMany(pass, { as: 'pass', foreignKey: 'pid' });
play.rushPlays = play.hasMany(rush, { as: 'rush', foreignKey: 'pid' });
play.sacks = play.hasMany(sack, { as: 'sack', foreignKey: 'pid' });
play.touchdowns = play.hasMany(td, { as: 'td', foreignKey: 'pid' });

module.exports = new GraphQLObjectType({
  name: 'PlayType',
  fields: assign(attributeFields(play), {
    rushPlays: {
      type: new GraphQLList(RushType),
      description: 'Rush Plays',
      resolve: resolver(play.rushPlays),
    },
    passPlays: {
      type: new GraphQLList(PassType),
      description: 'Pass Plays',
      resolve: resolver(play.passPlays),
    },
    sacks: {
      type: new GraphQLList(SackType),
      description: 'Sacks',
      resolve: resolver(play.sacks),
    },
    touchdowns: {
      type: new GraphQLList(TouchdownType),
      description: 'Touchdowns',
      resolve: resolver(play.touchdowns),
    },
  }),
});
