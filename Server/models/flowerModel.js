const mongoose = require('mongoose');

const flowersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    extraFields: {}
});

module.exports = mongoose.model('Flower', flowersSchema);