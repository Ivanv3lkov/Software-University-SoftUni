function negativeOrPositiveNums(arrayOfNums) {
    let newArray = [];
    for (const num of arrayOfNums) {

        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }

    for (const el of newArray) {     // or console.log(newArray.join('\n'));
        console.log(el);
    }
}

negativeOrPositiveNums([7, -2, 8, 9]);