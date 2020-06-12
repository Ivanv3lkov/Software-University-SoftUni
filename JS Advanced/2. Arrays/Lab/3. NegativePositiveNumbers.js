function solve(input) {
    let result = [];

    for (let el of input) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }
    return result.join('\n');
}

console.log(solve([3, -2, 0, -1]));