import Category from '../models/categoryModel.js';

export default {
  Activity: {
    category: (parent) => Category.findById(parent.category)
  }
}