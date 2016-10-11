import { attributeFields } from 'graphql-sequelize';
import { punt } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'PuntType',
  fields: attributeFields(punt),
});
