const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: TextTrackCue,
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Campsite = mongoose.modelNames('Campsite', campsiteSchema);

module.exports = Campsite;