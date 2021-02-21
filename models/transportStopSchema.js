const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportStopSchema = new Schema({
    name: {type: String},
    position: {
        lat: {type: String, require: false},
        long :{type: String, require: false},
    },
    informations: {type: mongoose.Types.ObjectId, required: false, ref: 'Enrichments'},
})

module.exports = mongoose.model('TransportStopSchema', transportStopSchema);