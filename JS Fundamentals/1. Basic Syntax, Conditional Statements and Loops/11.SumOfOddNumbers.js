function sumOfOddNumbers(n) {
    let currentNumber = 1;
    let sum = 0;
    let counter = 0;

    while (counter < n) {

        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
            counter++;
            sum += currentNumber;
        }
        currentNumber++;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);