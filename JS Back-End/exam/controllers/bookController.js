const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');

const bookService = require('../services/bookService');

const { getErrorMessage } = require('../utils/errorHelpers');

const { preloadBook, isBookOwner } = require('../middlewares/bookMiddlewares');

router.get('/', async (req, res) => {
    const books = await bookService.getAll().lean();
    res.render('book/catalog', { books });
});

router.get('/:bookId/details', async (req, res) => {
    const book = await bookService.getOneDetailed(req.params.bookId).lean();

    const isOwner = book.owner._id == req.user?._id;

    const isWished = book.wishingList.some(x => x._id == req.user?._id);

    res.render('book/details', { ...book, isOwner, isWished });
})

router.get('/:bookId/edit', isAuth, preloadBook, isBookOwner, (req, res) => {
    res.render('book/edit', { ...req.book });
});

router.post('/:bookId/edit', isAuth, preloadBook, isBookOwner, async (req, res) => {
    try {
        await bookService.updateOne(req.params.bookId, req.body);
        res.redirect(`/books/${req.params.bookId}/details`);
    } catch (error) {
        res.render('book/edit', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/create', isAuth, (req, res) => {
    res.render('book/create');
})

router.post('/create', isAuth, async (req, res) => {
    const bookData = { ...req.body, owner: req.user._id};

    try {
        await bookService.create(bookData);

        res.redirect('/books');
    } catch (error) {
        res.render('book/create', { ...req.body, error: getErrorMessage(error) });
    }
});

router.get('/:bookId/delete', isAuth, preloadBook, isBookOwner, async (req, res) => {
    await bookService.delete(req.params.bookId);

    res.redirect('/books');
});

router.get('/:bookId/wish', isAuth, async (req, res) => {
    const book = await bookService.getOne(req.params.bookId);
  
    book.wishingList.push(req.user._id);
   
    await book.save();
    res.redirect(`/books/${req.params.bookId}/details`);
});


module.exports = router;
