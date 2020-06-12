function solve(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    let sumInvNumbers = numbers.map(num => 1 / num).reduce((a, b) => a  + b);
    let concatNumbers = numbers.map(num => num.toString()).reduce((a, b) => a + b);

    console.log(sum);
    console.log(sumInvNumbers);
    console.log(concatNumbers);
}

solve([1, 2, 3])