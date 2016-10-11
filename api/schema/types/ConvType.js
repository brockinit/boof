import { attributeFields } from 'graphql-sequelize';
import { conv } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'ConvType',
  fields: attributeFields(conv),
});
