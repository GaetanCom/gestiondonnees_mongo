const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gardenSchema = new Schema({
    name: {type: String, require: false},
    surface: {type: Number, require: false},
    type: {type: String, require: false},
    position: {
        lat: {type: String, require: false},
        long :{type: String, require: false},
    },
})

module.exports = mongoose.model('GardenSchema', gardenSchema);