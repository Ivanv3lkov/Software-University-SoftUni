function solve(arrOfNums, criteria) {
    if (criteria === 'asc') {
        arrOfNums.sort((a, b) => a - b);
    } else if (criteria === 'desc') {
        arrOfNums.sort((a, b) => b - a);
    }
    return arrOfNums;
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));