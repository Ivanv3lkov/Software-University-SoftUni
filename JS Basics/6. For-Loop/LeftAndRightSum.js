function solve(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < n; i++) {
        leftSum += Number(input[i]);
    }

    for (let i = n; i < input.length; i++) {
        rightSum += Number(input[i]);
    }
 
    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        let diff = Math.abs(leftSum - rightSum);
        console.log(`No, diff = ${diff}`);
    }
}

solve(['2', '10', '90', '60', '40']);