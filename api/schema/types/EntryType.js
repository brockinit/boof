import { attributeFields } from 'graphql-sequelize';
import { entry } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'EntryType',
  fields: attributeFields(entry),
});
