function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];

    for (let index in firstArr) {

        if (index % 2 === 0) {
            thirdArr.push(Number(firstArr[index]) + Number(secondArr[index]));
        } else {
            thirdArr.push(firstArr[index] + secondArr[index]);
        }

    }
    console.log(thirdArr.join(' - '));
}

mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
