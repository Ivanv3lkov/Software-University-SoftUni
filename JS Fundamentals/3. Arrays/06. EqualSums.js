function solve(array) {
    let indexOfEl = -1;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }

        for (let j = i + 1; j < array.length; j++) {
            rightSum += array[j]
        }

        if (leftSum === rightSum) {
            indexOfEl = i;
        }
    }

    if (indexOfEl !== -1) {
        console.log(indexOfEl);
    } else {
        console.log('no');
    }
}
solve([1, 2, 3, 3]);