const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkingSchema = new Schema({
    name: {type: String, require: false},
    nbStands: {type: Number, require: false},
    open: {type: Boolean, require: false},
    address: {type: String, require: false},
    position: {
        lat: {type: String, require: false},
        long :{type: String, require: false},
    },
    informations: {type: mongoose.Types.ObjectId, required: false, ref: 'Enrichments'},
})

module.exports = mongoose.model('ParkingSchema', parkingSchema);