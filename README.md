# Collection Log App for Old School Runescape

Keep track of what unique items you have collected in the game.
To get your current items, it is required to manually pull the list from the game through an unofficial plugin.

Database hosted on MongoDB Atlas

Deployed to heroku: https://collection-log.herokuapp.com/

## Example queries and mutations

(GraphQL endpoint: https://collection-log.herokuapp.com/graphql)
(Note: You wouldn't want to add or remove items normally, because the items are fixed)




Get all items

```
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
```

Modify an item

```
mutation {
   modifyItem(id: String, obtained: Boolean, quantity: Int) {
    id
    obtained
    quantity
  }
}
```

Add an item

```
mutation {
  addItem(id: String, name: String, activity: String, obtained: Boolean, quantity: Int) {
    id
    name
    obtained
    quantity
    activity {
      activityName
    }
  }
}
```

Delete an item

```
mutation {
  deleteItem(id: String) {
    id
    name
    obtained
    quantity
    activity {
      activityName
    }
  }
}
```
