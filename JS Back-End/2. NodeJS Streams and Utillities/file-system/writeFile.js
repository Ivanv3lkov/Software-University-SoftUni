const fs = require('fs/promises');

const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quod.'

fs.writeFile('./file-system/text.txt', data, { encoding: 'utf-8'})
    .then(() => {
        console.log('Finish');
    })
    .catch((err) => {
        console.log('error');
    });