const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

exports.addBook = (userId, bookId) => {
    return User.updateOne({_id: userId}, {$push: {books: bookId}});
}
