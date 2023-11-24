const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, unique: true, required: true, trim: true },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: '{VALUE} is not a valid email address',
        },
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;