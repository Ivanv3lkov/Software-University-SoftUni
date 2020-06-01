function solve(input) {
    let result = input.sort((a ,b) => a.length - b.length || a.localeCompare(b));

    return result.join('\n');
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

));