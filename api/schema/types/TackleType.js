import { attributeFields } from 'graphql-sequelize';
import { tackle } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'TackleType',
  fields: attributeFields(tackle),
});
