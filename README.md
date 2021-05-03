# Collection Log App for Old School Runescape

Running in heroku: https://collection-log.herokuapp.com/
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
   modifyItem(id:"60883144a2c5304a34351507", obtained: true, quantity:10) {
    id
    obtained
    quantity
  }
}
```

Add an item

```
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
```

Delete an item

```
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
```
