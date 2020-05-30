function solve(input) {
    let text = input.shift();
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        if (letter == 'a') {
            sum += 1;
        }
        if (letter == 'e') {
            sum += 2;
        }
        if (letter == 'i') {
            sum += 3;
        }
        if (letter == 'o') {
            sum += 4;
        }
        if (letter == 'u') {
            sum += 5;
        }
    }
    console.log(sum);
}

solve(['hello']);