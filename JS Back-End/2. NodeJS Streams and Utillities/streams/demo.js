const fs = require('fs');

const readStream = fs.createReadStream('./streams/largeFile.txt', { encoding: 'utf-8', highWaterMark: 10000});
const writeStream = fs.createWriteStream('./streams/copyFile.txt', {encoding: 'utf-8'});

readStream.on('data', (chunk) => {
    console.log(chunk);
    console.log('---------------------------------------------');
});

readStream.on('end', () => {
    console.log('Finished');
})

writeStream.on('finish', () => console.log('File is saved'));

writeStream.write('Hello World');
writeStream.write('\n');
writeStream.write('Hello World 2');

writeStream.end();
