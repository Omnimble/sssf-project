import { gql } from 'apollo-server-express';

export default gql `
   extend type Query {
     items: [Item]
   }
   
   type Item {
      id: ID
      name: String
      activity: Activity
      obtained: Boolean
      quantity: Int
   }

   extend type Mutation {
      modifyItem(id: ID, name: String, activity: ID, obtained: Boolean, quantity: Int): Item
   }
`;