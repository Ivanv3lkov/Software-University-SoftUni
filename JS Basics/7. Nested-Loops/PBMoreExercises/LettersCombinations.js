function solve(input) {
    let letter1 = input.shift();
    let letter2 = input.shift();
    let letter3 = input.shift();

    let startLetter = letter1.charCodeAt(0);
    let endLetter = letter2.charCodeAt(0);
    let ignoreLetter = letter3.charCodeAt(0);
    let combinations = 0;
    let output = "";

    for (let i = startLetter; i <= endLetter; i++) {
        for (let j = startLetter; j <= endLetter; j++) {
            for (let k = startLetter; k <= endLetter; k++) {
                if (i != ignoreLetter && j != ignoreLetter && k != ignoreLetter) {
                    output += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                    combinations++;
                }
            }
        }
    }
    console.log(`${output}${combinations}`);
}

solve(["a", "c", "b"]);