const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
        validate: {
            validator: function() {
                return this.username.length >= 4;
            },
            message: 'Username should be at least 4 characters long!'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function() {
                return this.password.length >= 3;
            },
            message: 'Password should be at least 3 characters long!'
        }
    },
    address: {
        type: String,
        required: [true, 'Address is required!'],
        validate: {
            validator: function() {
                return this.validate.length <= 20;
            },
            message: 'The address should be a maximum of 20 characters long!'
        }
    },
    publications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication',
    }],
    shares: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication',
    }],
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next()
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
