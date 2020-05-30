function printDna(rows) {
    let symbol = 'ATCGTTAGGG'.split('');

    while (rows > 0) {

        if (rows === 1) {
            console.log(`**${symbol[0]}${symbol[1]}**`);
        } else if (rows === 2) {
            console.log(`**${symbol[0]}${symbol[1]}**`);
            console.log(`*${symbol[2]}--${symbol[3]}*`);
        } else if (rows === 3) {
            console.log(`**${symbol[0]}${symbol[1]}**`);
            console.log(`*${symbol[2]}--${symbol[3]}*`);
            console.log(`${symbol[4]}----${symbol[5]}`);
        } else {
            console.log(`**${symbol[0]}${symbol[1]}**`);
            console.log(`*${symbol[2]}--${symbol[3]}*`);
            console.log(`${symbol[4]}----${symbol[5]}`);
            console.log(`*${symbol[6]}--${symbol[7]}*`);
        }

        symbol.unshift(symbol.pop());
        symbol.unshift(symbol.pop());

        rows -= 4;
    }
}
printDna(4);





