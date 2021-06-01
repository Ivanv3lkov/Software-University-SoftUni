function solve(arrOfStrings, n) {
    for (let i = 0; i < n; i++) {
        arrOfStrings.unshift(arrOfStrings.pop());
    }
    return arrOfStrings.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));