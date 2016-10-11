import { attributeFields } from 'graphql-sequelize';
import { defense } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'DefenseType',
  fields: attributeFields(defense),
});
