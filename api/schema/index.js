import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { GameType } from './types';
import { game } from '../connectors';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    games: {
      type: new GraphQLList(GameType),
      args: {
        seas: { type: GraphQLInt },
        wk: { type: new GraphQLList(GraphQLInt) },
        v: { type: GraphQLString },
        h: { type: GraphQLString },
      },
      resolve: resolver(game),
    },
  },
});

const boofSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default boofSchema;
