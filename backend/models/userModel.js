const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /\S+@\S+\.\S+/.test(value),
            message: 'Invalid email address',
        },
    },
    location: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
        unique: true,
        validate: {
            validator: (value) => /^\d{10}$/.test(value),
            message: 'Invalid phone number',
        },
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
            message: 'Password must be at least 8 characters long and contain at least one letter and one digit',
        },
    },
    ownPet: {
        type: Boolean,
        required: false,
        unique: false,
    },
});

module.exports = mongoose.model('User', userSchema);