function solve(firstArr, secondArr) {
    let sum = 0;
    let isEqual = true;


    for (let i = 0; i < firstArr.length; i++) {
        let firstArrEl = firstArr[i];
        let secondArrEl = secondArr[i];

        if (firstArrEl !== secondArrEl) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            sum += Number(firstArrEl);
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);