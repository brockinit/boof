import { attributeFields } from 'graphql-sequelize';
import { pass } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'PassType',
  fields: attributeFields(pass),
});
