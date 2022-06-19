const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    // res.setHeader('Set-Cookie', 'test=Some;');

    res.cookie('test', 'Some test value');
    res.cookie('test2', 'Some test value2');
    res.send('Hello World');
});

app.get('/cats', (req, res) => {
    console.log(req.cookies);
    
    res.send('I love cats');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
