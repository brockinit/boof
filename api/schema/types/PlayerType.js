import { attributeFields } from 'graphql-sequelize';
import { player } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'PlayerType',
  fields: attributeFields(player),
});
