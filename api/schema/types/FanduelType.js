import { attributeFields } from 'graphql-sequelize';
import { fanduel } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'FanduelType',
  fields: attributeFields(fanduel),
});
