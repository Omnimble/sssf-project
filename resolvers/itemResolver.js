import Item from '../models/itemModel.js';
 
export default {
   Query: {
     items: () => Item.find({})
   },
   Mutation: {
     modifyItem: async (_, args, context) => {
       try {
         const { id, name, activity, obtained } = args;
         const updatedItem = await Item.findByIdAndUpdate(id, { name, activity, obtained }, { new: true });
         return updatedItem.save();
       } catch (error) {
         throw new UserInputError(`Error while updating the item: ${error.message}`);
       }
     }
   }
 };