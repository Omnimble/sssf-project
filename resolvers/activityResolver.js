import Activity from '../models/activityModel.js';

export default {
   Item: {
     activity: (parent) => Activity.findById(parent.activity)
   }
 }