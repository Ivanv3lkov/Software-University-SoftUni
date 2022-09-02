const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const bookController = require('./controllers/bookController');

router.use(homeController);
router.use('/auth', authController);
router.use('/books', bookController);
router.use('*', (req, res) => {
  res.render('404');
})

module.exports = router;