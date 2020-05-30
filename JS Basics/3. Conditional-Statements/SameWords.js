function sameWords(input) {
    let word1 = input.shift();
    let word2 = input.shift();

    if (word1.toLowerCase() == word2.toLowerCase()) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

sameWords(['heLlo', 'HELLO1']);