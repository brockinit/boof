import { attributeFields } from 'graphql-sequelize';
import { offense } from '../../connectors';
import { GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'OffenseType',
  fields: attributeFields(offense),
});
