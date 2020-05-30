function solve(input) {
    let n = Number(input[0]);
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
        sum += currentNumber;
    }

    let diff = sum - maxNumber;

    if (diff === maxNumber) {
    console.log('Yes');
    console.log(`Sum = ${diff}`);
    } else {
        let diffTwo = Math.abs(maxNumber - diff);
        console.log('No');
        console.log(`Diff = ${diffTwo}`);
    }

}

solve(['4', '6', '1', '2', '3'])