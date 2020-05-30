function solve(arrayOfNumbers) {

    sumEvenNumbers = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNumber = Number(arrayOfNumbers[i]);

        if (currentNumber % 2 === 0) {
            sumEvenNumbers += currentNumber;
        }
    }

    console.log(sumEvenNumbers);
}

solve(['1', '2', '3', '4', '5', '6']);