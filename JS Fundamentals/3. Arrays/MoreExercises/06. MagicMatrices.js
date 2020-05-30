function magicMatrices(matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }

    if (magicMatrices !== false) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
