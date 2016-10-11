import { attributeFields } from 'graphql-sequelize';
import { play } from '../../connectors';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import assign from 'lodash/assign';
import RushType from './RushType';
import PassType from './PassType';
import SackType from './SackType';
import TouchdownType from './TouchdownType';

module.exports = new GraphQLObjectType({
  name: 'PlayType',
  fields: assign(attributeFields(play), {
    rushPlays: {
      type: new GraphQLList(RushType),
      description: 'Rush Plays',
      resolve: ({ pid }, args, { resolvers }) => resolvers.getRushPlays(pid),
    },
    passPlays: {
      type: new GraphQLList(PassType),
      description: 'Pass Plays',
      resolve: ({ pid }, args, { resolvers }) => resolvers.getPassPlays(pid),
    },
    sacks: {
      type: new GraphQLList(SackType),
      description: 'Sacks',
      resolve: ({ pid }, args, { resolvers }) => resolvers.getSacks(pid),
    },
    touchdowns: {
      type: new GraphQLList(TouchdownType),
      description: 'Touchdowns',
      resolve: ({ pid }, args, { resolvers }) => resolvers.getTouchdownPlays(pid),
    },
  }),
});
