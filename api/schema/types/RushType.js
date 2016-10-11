import { attributeFields } from 'graphql-sequelize';
import { rush } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'RushType',
  fields: attributeFields(rush),
});
