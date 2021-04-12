import itemSchema from './itemSchema.js';
import activitySchema from './activitySchema.js';
import categorySchema from './categorySchema.js';
import {gql} from 'apollo-server-express';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
   linkSchema,
   itemSchema,
   activitySchema,
   categorySchema
];
