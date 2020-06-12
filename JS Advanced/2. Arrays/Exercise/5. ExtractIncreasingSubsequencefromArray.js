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

    return result.join('\n');
}
console.log(solve([1, 
    2, 
    3,
    4]
    
    
    ));