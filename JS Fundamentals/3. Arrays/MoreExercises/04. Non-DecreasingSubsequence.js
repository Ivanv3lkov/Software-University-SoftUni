function solve(array) {
    let newArr = [];
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
            newArr.push(array[i]);
        }
    }

    console.log(newArr.join(" "));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);