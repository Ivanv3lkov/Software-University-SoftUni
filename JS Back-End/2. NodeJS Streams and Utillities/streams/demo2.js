const fs = require('fs');
const zlib = require('zlib');


const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./streams/largeFile.txt', { encoding: 'utf-8', highWaterMark: 1000});
const writeStream = fs.createWriteStream('./streams/copyFile.txt', {encoding: 'utf-8'});

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// readStream.on('end', () => {
//     writeStream.end();
//     console.log('Finished');
// });

writeStream.on('finish', () => console.log('File is saved'));

readStream.pipe(gzip).pipe(writeStream);


