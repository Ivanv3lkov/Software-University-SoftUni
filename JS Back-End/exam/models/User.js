const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: {
            validator: function () {
                return this.email.length >= 10;
            },
            message: 'Email should be at least 10 characters long!'
        }
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        validate: {
            validator: function () {
                return this.username.length >= 4;
            },
            message: 'Username should be at least 4 characters long!'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: function () {
                return this.password.length >= 3;
            },
            message: 'Password should be at least 3 characters long!'
        }
    },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 1
    }
})

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next()
        });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
