import { attributeFields } from 'graphql-sequelize';
import { redzone } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'RedzoneType',
  fields: attributeFields(redzone),
});
