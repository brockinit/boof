import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { GameType, ScheduleType } from './types';
import { game, schedule } from '../connectors';

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
    schedule: {
      type: new GraphQLList(ScheduleType),
      args: {
        seas: { type: GraphQLInt },
        wk: { type: GraphQLInt },
      },
      resolve: resolver(schedule),
    },
  },
});

const boofSchema = new GraphQLSchema({
  query: RootQueryType,
});

export default boofSchema;
