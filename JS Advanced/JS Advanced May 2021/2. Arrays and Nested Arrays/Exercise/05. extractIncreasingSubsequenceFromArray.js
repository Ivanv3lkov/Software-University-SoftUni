function solve(input) {
    let result = [];
    let currBiggestOne = 0;

    for (let i = 0; i < input.length; i++) {
        let currEl = input[i];
        
        if (currEl >= currBiggestOne) {
            result.push(currEl);
            currBiggestOne = Math.max(...result);
        }
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));