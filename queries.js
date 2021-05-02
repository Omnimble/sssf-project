import { gql } from 'apollo-server-express';

const modifyItem = gql `
mutation {
    items {
      id
      itemName
      obtained
      quantity
    }
  }
  `;

export default getItemNames;