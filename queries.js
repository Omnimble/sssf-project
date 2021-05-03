import { gql } from 'apollo-server-express';

const getItems = gql `
    query {
      items {
        id
        name
        obtained
        quantity
        activity {
          activityName
        }
      }
    }
    `;

const modifyItem = gql `
mutation {
   modifyItem(id:"60883144a2c5304a34351507", obtained: true, quantity:10) {
    id
    obtained
    quantity
  }
}
  `;
const addItem = gql `
mutation {
  addItem(id:"60883144a2c5304a34351507", name: "Jar of Miasma", activity: "607410f6b231f4f0d9fa7f44", obtained:true, quantity:5) {
   id
   name
   obtained
   quantity
   activity {
     activityName
   }
 }
}
  `;

const deleteItem = gql `
  mutation {
    deleteItem(id:"6090175b03fbf43814a51804") {
     id
     name
     obtained
     quantity
     activity {
       activityName
     }
   }
 }
    `;



export default getItemNames;