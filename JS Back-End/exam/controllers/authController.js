const router = require('express').Router();

const authService = require('../services/authService')

const { COOKIE_SESSION_NAME } = require('../constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authService.login(email, password);
        const token = await authService.createUserToken(user);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });

        res.redirect('/')
    } catch (error) {
        return res.render('auth/login', { error: getErrorMessage(error) })
    }
});

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const { email, username, password, confirmPassword } = req.body;

    try {
        const createdUser = await authService.create(email, username, password, confirmPassword);
        const token = await authService.createUserToken(createdUser);

        res.cookie(COOKIE_SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        //Add mongoose error mapper
        return res.render('auth/register', { error: getErrorMessage(error) });
    }
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/')
});

module.exports = router;
