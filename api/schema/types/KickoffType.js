import { attributeFields } from 'graphql-sequelize';
import { kickoff } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'KickoffType',
  fields: attributeFields(kickoff),
});
