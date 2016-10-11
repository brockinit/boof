import { attributeFields } from 'graphql-sequelize';
import { fumble } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'FumbleType',
  fields: attributeFields(fumble),
});
