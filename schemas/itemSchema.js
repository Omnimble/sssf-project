import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     items: [Item]
   }
   
   type Item {
      id: ID
      itemName: String,
      examine: String,
   }
`;
