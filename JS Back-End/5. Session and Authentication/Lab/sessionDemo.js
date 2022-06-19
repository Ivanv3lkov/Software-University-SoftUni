const express = require('express');
const expressSession = require('express-session');

const app = express();

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.get('/', (req, res) => {
    req.session.username = 'Pesho' + Math.random();
    res.send('Home page');
});

app.get('/cats', (req, res) => {
    console.log(req.session);
    res.send('cats');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
