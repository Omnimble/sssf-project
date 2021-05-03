# Collection Log App for Old School Runescape

Deployed to heroku: https://collection-log.herokuapp.com/

Database hosted on MongoDB Atlas


## Example queries and mutations

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
