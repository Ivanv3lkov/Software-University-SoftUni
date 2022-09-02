const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/env')

exports.create = async (email, username, password, confirmPassword) => {
    const existingUser = await User.findOne({ username: username.toLowerCase() });

    if (existingUser) {
        throw { message: `This username ${username} already exists` };
    }

    if (password !== confirmPassword) {
        throw { message: 'Passwords don\'t match' };
    }

    return User.create({ email, username, password, confirmPassword });
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw { message: 'Cannot find username or password' };
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw { message: 'Cannot find username or password' };
    };

    return user;
};

exports.createUserToken = async (user) => {
    const payload = { _id: user._id, username: user.username, address: user.address };
    const options = { expiresIn: '2d' };

    const tokenPromise = new Promise((resolve, reject) => {

        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });

    return tokenPromise;
};
