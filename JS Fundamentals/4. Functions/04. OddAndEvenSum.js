function solve(number) {
    let numberToString = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        let currentDigit = Number(numberToString[i]);
        
        if (currentDigit % 2 !== 0) {
            oddSum += currentDigit;
        } else {
            evenSum += currentDigit
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(3495892137259234);

function secondSolve(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        let currentDigit = number % 10;

        if (currentDigit % 2 !== 0) {
            oddSum += currentDigit;
        } else {
            evenSum += currentDigit;
        }

        number = Math.floor(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

secondSolve(3495892137259234);