function solve(input) {
    let step = Number(input.pop());
    let result = [];
    
    for (let i = 0; i < input.length; i += step) {
        result.push(input[i]);
    }

    return result.join('\n');
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
));