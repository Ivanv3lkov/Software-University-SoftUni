const router = require('express').Router();
const mongoose = require('mongoose');

const userService = require('../services/userService');
const bookService = require('../services/bookService');

router.get('/', async (req, res) => {
  res.render('home');
})

router.get('/profile', async (req, res) => {
  const user = await userService.getOne(req.user._id).lean();
  const books = await bookService.getAll().lean();

  const wishedBooks = books.filter(book => book.wishingList.includes(user._id))

  res.render('home/profile', { ...user, wishedBooks });
})

module.exports = router;
