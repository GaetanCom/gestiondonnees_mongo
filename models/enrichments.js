const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const enrichments = new Schema({
    name: {type: String},
    type: {type: String},
    description: {type: String},
})

module.exports = mongoose.model('Enrichments', enrichments);