const fs = require('fs/promises');

fs.unlink('./file-system/text.txt')
    .then(() => {
        console.log('finish removing');
    });

    