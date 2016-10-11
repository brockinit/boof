import { attributeFields } from 'graphql-sequelize';
import { penalty } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'PenaltyType',
  fields: attributeFields(penalty),
});
