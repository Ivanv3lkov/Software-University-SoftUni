function solve(numbers) {

    let sumOddNums = 0;
    let sumEvenNums = 0;
    let difference = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            sumEvenNums += num;
        } else {
            sumOddNums += num;
        }
    }

    difference = sumEvenNums - sumOddNums;
    console.log(difference);
}

solve([3, 5, 7, 9]);