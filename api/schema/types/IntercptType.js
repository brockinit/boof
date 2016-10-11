import { attributeFields } from 'graphql-sequelize';
import { intercpt } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'IntercptType',
  fields: attributeFields(intercpt),
});
