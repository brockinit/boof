import { attributeFields } from 'graphql-sequelize';
import { injury } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'InjuryType',
  fields: attributeFields(injury),
});
