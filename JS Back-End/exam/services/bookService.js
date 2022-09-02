const Book = require('../models/Book');

exports.getAll = () => Book.find();

exports.getOne = (bookId) => Book.findById(bookId);

exports.getOneDetailed = (bookId) => Book.findById(bookId).populate('owner');

exports.create = (bookData) => Book.create(bookData);

exports.updateOne = (bookId, bookData) => Book.updateOne({ _id: bookId }, { $set: bookData });

exports.delete = (bookId) => Book.deleteOne({ _id: bookId });
