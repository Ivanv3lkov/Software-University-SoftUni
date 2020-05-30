function solve(input) {
    let command = input.shift();

    let counterN = 0;
    let counterO = 0;
    let counterC = 0;
    let counter = 0;

    let currentWord = "";
    let result = "";

    while (command != "End") {
        let letter = Number(command.charCodeAt(0))

        if (letter >= 97 && letter <= 122 || letter >= 65 && letter <= 90) {
            let symbol = String.fromCharCode(letter);

            if (symbol == 'n' && counterN < 1) {
                counter++;
                counterN++;
            } else if (symbol == 'o' && counterO < 1) {
                counter++;
                counterO++;
            } else if (symbol == 'c' && counterC < 1) {
                counter++;
                counterC++;
            } else {
                currentWord += symbol;
            }
        }

        if (counter == 3) {
            result += currentWord;
            currentWord = " ";
            result += currentWord;

            currentWord = "";
            counterN = 0;
            counterO = 0;
            counterC = 0;
            counter = 0;
        }
        command = input.shift();
    }
    console.log(result);
}
solve([
    'H', 'n', 'e', 'l',
    'l', 'o', 'o', 'c',
    't', 'c', 'h', 'o',
    'e', 'r', 'e', 'n',
    'e', 'End'
]);