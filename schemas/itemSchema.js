import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     items: [Item]
   }
   
   type Item {
      id: ID
      itemName: String
      activity: Activity
      obtained: Boolean
   }

   extend type Mutation {
      modifyItem(id: ID, name: String, activity: ID, obtained: Boolean): Item
   }
`;
