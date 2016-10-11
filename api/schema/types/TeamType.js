import { attributeFields } from 'graphql-sequelize';
import { team } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'TeamType',
  fields: attributeFields(team),
});
