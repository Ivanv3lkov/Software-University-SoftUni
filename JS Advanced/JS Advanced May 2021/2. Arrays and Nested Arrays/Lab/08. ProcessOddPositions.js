function solve(arrOfNumbers) {
    return arrOfNumbers.filter((n, i) => i % 2 != 0).map(n => n * 2).reverse().join(' ');
}

console.log(solve([10, 15, 20, 25]));