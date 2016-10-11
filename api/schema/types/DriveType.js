import { attributeFields } from 'graphql-sequelize';
import { drive } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'DriveType',
  fields: attributeFields(drive),
});
