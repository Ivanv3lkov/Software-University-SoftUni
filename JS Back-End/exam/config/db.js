const mongoose = require('mongoose');

const { DB_QUERYSTRING } = require('./env');

exports.initializeDatabase = () => mongoose.connect(DB_QUERYSTRING);
