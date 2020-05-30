function solve(array) {
    let indexOfBiggestSeq = -1;
    let maxSeqLength = 0;

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let currentSeqLength = 1;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (currentEl !== nextEl) {
                break;
            }

            currentSeqLength++;
        }             

        if (currentSeqLength > maxSeqLength){
            maxSeqLength = currentSeqLength;
            indexOfBiggestSeq = i;
        }
    }

    let element = array[indexOfBiggestSeq];
    console.log(`${element} `.repeat(maxSeqLength));
}


solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);