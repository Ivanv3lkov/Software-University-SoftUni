function solve(word, text) {

    while (text.includes(word)) {
        text = text.replace(word, '');
    }

    console.log(text);
}

solve('ice', 'kicegiciceeb');