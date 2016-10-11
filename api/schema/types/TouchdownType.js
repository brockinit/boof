import { attributeFields } from 'graphql-sequelize';
import { td } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'TouchdownType',
  fields: attributeFields(td),
});
