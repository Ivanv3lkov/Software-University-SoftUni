const User = require('../models/User');

exports.getOne = (userId) => User.findById(userId);

exports.addPublication = (userId, publicationId) => {
    // const user = await User.findById(userId);

    // user.publications.push(publicationId)
    // return await user.save()

    return User.updateOne({_id: userId}, {$push: {publications: publicationId}});
}
