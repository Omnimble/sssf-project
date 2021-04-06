const itemData = [
    {
       id: '1',
       itemName: 'Sire Pet',
       category: '1',
    },
 ];
 
 const categoryData = [
    {
       id: '1',
       categoryName: 'Bosses',
    },
    {
        id: '2',
        categoryName: 'Raids',
     },
     {
        id: '3',
        categoryName: 'Clues',
     },
     {
        id: '4',
        categoryName: 'Minigames',
     },
     {
        id: '5',
        categoryName: 'Other',
     },
 ];
 
 export default {
    Query: {
       animals: (parent, args) => {
        return itemData;
       },
    },
 };
 