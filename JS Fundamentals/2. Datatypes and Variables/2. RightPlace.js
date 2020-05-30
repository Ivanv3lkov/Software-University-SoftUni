function solve(firstWord, character, secondWord) {
    let matchWord = '';

    for (let i = 0; i < firstWord.length; i++) {
        let currentChar = firstWord[i];
        if (currentChar === '_') {
            matchWord += character;
        } else {
            matchWord += currentChar;
        }
    }

    if (matchWord === secondWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong')