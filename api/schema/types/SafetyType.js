import { attributeFields } from 'graphql-sequelize';
import { safety } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'SafetyType',
  fields: attributeFields(safety),
});
