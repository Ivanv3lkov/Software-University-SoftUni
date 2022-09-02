const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config/env');
const routes = require('./routes');
const { initializeDatabase } = require('./config/db');
const { auth } = require('./middlewares/authMiddleware');
const { errorHandler } = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler);

initializeDatabase()
    .then(() => {
        console.log('Db connection established!');
        app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
    })
    .catch((err) => {
        console.log('Cannot connect to db:', err);
    });
