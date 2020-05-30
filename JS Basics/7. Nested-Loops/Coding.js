function solve(input) {
    let num = input.shift();

    for (let index = num.length - 1; index >= 0; index-- ) {
        let digit = Number(num[index]);
        let symbol = String.fromCharCode(digit + 33);

        if (digit === 0) {
            console.log('ZERO');
        } else {
            console.log(symbol.repeat(digit));
        }
        }
    }


solve(['2049']);