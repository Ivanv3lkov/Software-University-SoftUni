function sumLastKNumbersSequence(n, k) {

    let arr = [1];

    for (let index = 1; index < n; index++) {
        let target = index - k;
        let sum = 0;

        for (let j = index - 1; j >= target; j--) {
            if (j < 0) {
                break;
            }
            sum += arr[j];
        }

        arr.push(sum);
    }

    console.log(arr.join(' '));
}
//sumLastKNumbersSequence(6, 3);

function secondSolve(n, k) {
    let arr = [1];

    for (let index = 1; index < n; index++) {
        let target = index - k;

        if (target < 0) {
            target = 0;
        }

        let sum = 0; 
        
        arr.slice(target, index).forEach(x => sum += x);

        arr.push(sum);

    }
    console.log(arr.join(' '));
}

secondSolve(6, 3);