import { gql } from 'apollo-server-express';

const getItemNames = gql `
{
    items {
      id
      itemName
    }
  }
  `;