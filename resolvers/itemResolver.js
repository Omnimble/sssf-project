import Item from '../models/itemModel.js';

export default {
    Query: {
        items: () => Item.find({})
    },
    Mutation: {
        addItem: async(_, args, context) => {
            const newItem = new Item(args);
            return newItem.save();
        },
        modifyItem: async(_, args, context) => {
            try {
                const { id, obtained, quantity } = args;
                const updatedItem = await Item.findByIdAndUpdate(id, { obtained, quantity }, { new: true });
                return updatedItem.save();
            } catch (error) {
                throw new UserInputError(`Error while updating the item: ${error.message}`);
            }
        },
        deleteItem: async(_, args, context) => {
            const { id } = args;
            console.log("id:" + id)
            const deleteItem = await Item.findByIdAndRemove(id);
            if (!deleteItem) {
                throw new Error('Error deleting item.');
            }
            return deleteItem;
        }
    }
};