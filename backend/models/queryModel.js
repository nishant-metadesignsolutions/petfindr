const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    user_email: {
        type: String,
        required: false,
    },
    iWantTo: {
        type: String,
        required: true,
    },
    petType: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model('Query', querySchema);