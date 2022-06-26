const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minlength: 6,
    },
    paintingTechnique: {
        type: String,
        required: [true, 'Painting technique is required!'],
        maxlength: 15,
    },
    artPicture: {
        type: String,
        required: true,
        validate: {
            validator: function() {
                return this.artPicture.startsWith('http');
            },
            message: 'Art picture url should be a link'
        }
    },
    certificate: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    usersShared: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
