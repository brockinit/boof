import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';
import assign from 'lodash/assign';
import { attributeFields, resolver } from 'graphql-sequelize';
import { game, team } from '../../connectors';
import TeamType from './TeamType';
import OffenseType from './OffenseType';
import DefenseType from './DefenseType';
import PlayType from './PlayType';

game.teams = game.hasMany(team, { as: 'team', foreignKey: 'gid' });

module.exports = new GraphQLObjectType({
  name: 'GameType',
  fields: assign(attributeFields(game), {
    teams: {
      type: new GraphQLList(TeamType),
      args: {
        tname: { type: GraphQLString },
      },
      description: 'Team Stats by Game',
      resolve: resolver(game.teams),
    },
    plays: {
      type: new GraphQLList(PlayType),
      description: 'Plays for each game',
      args: {
        def: { type: GraphQLString },
        off: { type: GraphQLString },
      },
      resolve: ({ gid }, args, { resolvers }) => resolvers.getPlays(gid, args),
    },
    offensiveStats: {
      type: new GraphQLList(OffenseType),
      description: 'Offensive Stats by game',
      resolve: ({ gid }, args, { resolvers }) => resolvers.getOffense(gid),
    },
    defensiveStats: {
      type: new GraphQLList(DefenseType),
      description: 'Defensive Stats by game',
      resolve: ({ gid }, args, { resolvers }) => resolvers.getDefense(gid),
    },
  }),
});
