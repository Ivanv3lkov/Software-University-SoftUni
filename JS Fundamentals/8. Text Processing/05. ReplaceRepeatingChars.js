function solve(string) {
    let output = string[0];

    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];
        let previousChar = string[i - 1];

        if (currentChar !== previousChar) {
            output += currentChar;
        }
    }

    console.log(output);
}

solve('aaaaabbbbbcdddeeeedssaa');