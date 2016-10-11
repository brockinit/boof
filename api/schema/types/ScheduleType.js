import { attributeFields } from 'graphql-sequelize';
import { schedule } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'ScheduleType',
  fields: attributeFields(schedule),
});
