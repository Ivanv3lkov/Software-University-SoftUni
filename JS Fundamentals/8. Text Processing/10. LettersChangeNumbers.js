function solve(input) {
    const isUppercase = (symbol) => {
        return symbol === symbol.toUpperCase();
    };

    let words = input.split(' ').filter((el) => el !== '');
    let totalSum = 0;

    for (let word of words) {
        let firstLetter = word[0];  
        let lastLetter = word[word.length - 1];
        let number = Number(word.substring(1, word.length - 1));
        
        let firstAscii = firstLetter.toLowerCase().charCodeAt(0);
        let secondAscii = lastLetter.toLowerCase().charCodeAt(0);

        if (isUppercase(firstLetter)) {
            number /= firstAscii - 96;
        } else {
            number *= firstAscii - 96;
        }

        if (isUppercase(lastLetter)) {
            number -= secondAscii - 96;
        } else {
            number += secondAscii - 96;
        }

        totalSum += number;

    }

    console.log(totalSum.toFixed(2));
}

solve('P34562Z q2576f   H456z');