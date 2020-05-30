function solve(arrayOfNums, sum) {

    for (let i = 0; i < arrayOfNums.length; i++) {
        let currentNum = arrayOfNums[i];

        for (let j = i + 1; j < arrayOfNums.length; j++) {
            let nextNum = arrayOfNums[j];


            if (currentNum + nextNum === sum) {
                console.log(`${currentNum} ${nextNum}`);
            }
        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8], 27);