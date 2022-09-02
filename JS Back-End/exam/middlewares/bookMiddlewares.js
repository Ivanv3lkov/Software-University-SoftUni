const bookService = require('../services/bookService');

exports.preloadBook = async (req, res, next) => {
    const book = await bookService.getOne(req.params.bookId).lean();
    
    req.book = book;
    next();
}

exports.isBookOwner = (req, res, next) => {
    if (req.book.owner != req.user._id) {
        return next({ message: 'You are not authorized!', status: 401 });
    }
    next();
}