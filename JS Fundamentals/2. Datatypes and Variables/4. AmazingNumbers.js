function solve(number) {
    let currentNumber = number;
    let sum = 0;

    while (currentNumber > 0) {
        let digit = currentNumber % 10;
        sum += digit;

        currentNumber = Math.trunc(currentNumber / 10);
    }

    if (sum.toString().includes(9)) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }
}

solve(999);