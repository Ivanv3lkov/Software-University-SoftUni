const {promisify} = require('util')

const jwt = require('jsonwebtoken');

exports.verify = promisify(jwt.verify)
exports.sign = promisify(jwt.sign)