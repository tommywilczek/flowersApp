const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FlowerSchema = new Schema({
   name: {
    type: String,
    required: [true, 'Name is required.']
   },
   type: String
  })
//Flowers constant represents the entire collection of data
const Flowers = mongoose.model('Flowers', FlowerSchema);
module.exports = Flowers;