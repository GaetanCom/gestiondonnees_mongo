const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const veloSchema = new Schema({
    name: {type: String},
    nbStands: {type: Number},
    position: {
        lat: {type: String, require: false},
        long :{type: String, require: false},
    },
    informations: {type: mongoose.Types.ObjectId, required: true, ref: 'Enrichments'},
})

module.exports = mongoose.model('VeloSchema', veloSchema);