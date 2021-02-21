const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const veloSchema = new Schema({
    name: {type: String},
    nbStandsAvailable: {type: Number},
    nbVeloAvailable: {type: Number},
    position: {
        lat: {type: String, require: false},
        long :{type: String, require: false},
    },
    informations: {type: mongoose.Types.ObjectId, required: false, ref: 'Enrichments'},
})

module.exports = mongoose.model('VeloSchema', veloSchema);