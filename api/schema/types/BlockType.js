import { attributeFields } from 'graphql-sequelize';
import { block } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'BlockType',
  fields: attributeFields(block),
});
