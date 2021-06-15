const mongoose = require('mongoose');

const poiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
})

const POI = mongoose.model('POI', poiSchema);

module.exports = POI;