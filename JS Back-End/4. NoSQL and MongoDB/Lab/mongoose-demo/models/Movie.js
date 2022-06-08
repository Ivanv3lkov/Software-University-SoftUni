const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        required: [true, 'Movie title is required'],
        minlength: 2,

    },
    description: String,
    genres: {
        type: String,
        enum: ['action', 'comedy', 'thriler', 'horror'],
        required: false,
    },
    imageUrl: String,
    year: {
        type: Number,
        min: [1888, 'The year {VALUE} should not be higher than 1888'],
        required: false,
    },
});

// movieSchema.method('getInfo', function() {
//     return `${this.title} - ${this.description || 'n/a'}`;
// });
movieSchema.methods.getInfo = function() {
    return `${this.title} - ${this.description || 'n/a'}`;
};

movieSchema.virtual('isNew')
    .get(function() {
        return this.year >= 2020
    });

movieSchema.path('title').validate(function() {
    return this.title.length >= 2 && this.title.length <= 20;
}, `Movie title should be less than 20 characters and more than 2!`);

const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = Movie;

// db.movies.updateOne({title: 'New test movie'}, {$set: {description: 'Modified description', year: 2021}});