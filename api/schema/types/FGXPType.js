import { attributeFields } from 'graphql-sequelize';
import { fgxp } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'FGXPType',
  fields: attributeFields(fgxp),
});
