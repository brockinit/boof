import { attributeFields } from 'graphql-sequelize';
import { kicker } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'KickerType',
  fields: attributeFields(kicker),
});
