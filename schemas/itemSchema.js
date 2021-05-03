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
      addItem(id: ID, name: String, activity: String, obtained: Boolean, quantity: Int): Item
      modifyItem(id: ID, obtained: Boolean, quantity: Int): Item
      deleteItem(id: ID): Item
   }
`;