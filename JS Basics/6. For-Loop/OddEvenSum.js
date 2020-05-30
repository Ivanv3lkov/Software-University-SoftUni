function solve(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {

        if (i % 2 ==! 0) {
            oddSum += Number(input[i]);
        } else {
            evenSum += Number(input[i]);
        }
    }

    if (oddSum === evenSum) {
        console.log('Yes');
        console.log(`Sum = ${oddSum}`);
    } else {
        console.log('No');
        console.log(`Diff = ${Math.abs(oddSum - evenSum)}`);
    }
}

solve(['4', '10', '50', '60', '20']);