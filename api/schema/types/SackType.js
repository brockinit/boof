import { attributeFields } from 'graphql-sequelize';
import { sack } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'SackType',
  fields: attributeFields(sack),
});
