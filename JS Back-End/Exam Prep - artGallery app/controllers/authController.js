const router = require('express').Router();

const authService = require('../services/authService')

const {COOKIE_SESSION_NAME} = require('../constants');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest,  async (req, res) => {
    const { username, password } = req.body

    if(!password){
        return res.render('auth/login', {error: "Please enter a password"});
    }

    try{
        const user = await authService.login(username, password);
        const token = await authService.createUserToken(user);
    
        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});
    
        res.redirect('/')
    } catch (error) {
        return res.render('auth/login', {error: getErrorMessage(error)})

    }
    
})

router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});


router.post('/register', isGuest, async (req, res) => {
    // const {username, password, repeatPassword, address }
    const { password, repeatPassword, ...userData } = req.body;

    if (password !== repeatPassword){
        return res.render('auth/register', {error: 'Passwords don\'t match'})
    }

    try{
        // await authService.create({username, password, repeatPassword, address});
        const createdUser = await authService.create({password, ...userData});
        const token = await authService.createUserToken(createdUser);

        res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true});

        res.redirect('/');

    } catch (error) {
        //Add mongoose error mapper
        return res.render('auth/register', {error: getErrorMessage(error)})

    } 
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie(COOKIE_SESSION_NAME);
    res.redirect('/')
});




module.exports = router;