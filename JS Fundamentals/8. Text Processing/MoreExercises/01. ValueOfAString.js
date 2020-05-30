function solve(input) {
    let string = input[0].split('');
    let command = input[1];
    let totalSum = 0;

    if (command === 'UPPERCASE') {
        for (let i = 0; i < string.length; i++) {
            let asciiCodeSymbol = string[i].charCodeAt(0);
            if (asciiCodeSymbol >= 65 && asciiCodeSymbol <= 90)
                totalSum += asciiCodeSymbol;
        }
    } else {
        for (let i = 0; i < string.length; i++) {
            let asciiCodeSymbol = string[i].charCodeAt(0);
            if (asciiCodeSymbol >= 97 && asciiCodeSymbol <= 122)
                totalSum += asciiCodeSymbol;
        }
    }
    console.log(`The total sum is: ${totalSum}`);
}


solve(['AC/DC', 'UPPERCASE']);
