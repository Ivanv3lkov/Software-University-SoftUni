function solve(input) {
    let delimeter = input.pop();
    let result = input.join(delimeter)

    return result;
}


console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'])
);