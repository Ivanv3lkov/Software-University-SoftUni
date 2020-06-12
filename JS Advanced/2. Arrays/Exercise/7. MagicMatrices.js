function solve(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);

    for (let i = 0; i < matrix.length; i++) {
        let sumRow = matrix[i].reduce((a, b) => a + b, 0);
        let sumCol = matrix.map(x => x[i]).reduce((a, b) => a + b, 0);


        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
        }
    }
    return isMagic;
}

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]


));