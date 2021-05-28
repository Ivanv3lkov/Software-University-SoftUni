function solve(matrix) {
   return matrix.reduce((a, b) => a.concat(b)).sort((a, b) => a - b).pop();
}

console.log(solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
));