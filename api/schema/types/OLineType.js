import { attributeFields } from 'graphql-sequelize';
import { oline } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'OLineType',
  fields: attributeFields(oline),
});
