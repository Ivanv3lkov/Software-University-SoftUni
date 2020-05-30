function solve(input) {
    let output = [];

    for (let el of input) {
        if (!output.includes(el)) {
            output.push(el);
        }
    }

    return output.join(' ');
}

console.log(solve([7, 8, 9, 7, 2, 3, 4, 1, 2]));