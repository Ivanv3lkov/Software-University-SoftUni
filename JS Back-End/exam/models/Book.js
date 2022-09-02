const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required!'],
    validate: {
      validator: function () {
          return this.title.length >= 2;
      },
      message: 'Title should be at least 2 characters long!'
  }
  },
  author: {
    type: String,
    required: [true, 'Author is required!'],
    validate: {
      validator: function () {
          return this.author.length >= 5;
      },
      message: 'Author should be at least 5 characters long!'
  }
  },
  image: {
    type: String,
    required: [true, 'Image is required!'],
  },
  review: {
    type: String,
    required: [true, 'Book Review is required!'],
    validate: {
      validator: function () {
          return this.title.length >= 10;
      },
      message: 'Review should be at least 10 characters long!'
  }
  },
  genre: {
    type: String,
    required: [true, 'Genre is required!'],
    validate: {
      validator: function () {
          return this.genre.length >= 3;
      },
      message: 'Genre should be at least 3 characters long!'
  }
  },
  stars: {
    type: Number,
    required: [true, 'Stars are required!'],
    min: [1, 'Stars should be a positive number between 1 and 5'],
    max: [5, 'Stars should be a positive number between 1 and 5']
  },
  wishingList: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }

});

bookSchema.path('image').validate(function() {
  return this.image.startsWith('http');
}, 'Image url should be a link');


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
