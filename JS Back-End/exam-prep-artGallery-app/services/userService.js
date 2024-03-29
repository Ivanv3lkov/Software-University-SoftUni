const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

exports.addPublication = (userId, publicationId) => {
    return User.updateOne({_id: userId}, {$push: {publications: publicationId}});
}
