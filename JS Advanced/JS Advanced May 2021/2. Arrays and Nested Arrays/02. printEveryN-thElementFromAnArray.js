function solve(arrOfStrings, n) {
    let output = [];
    for (let i = 0; i < arrOfStrings.length; i += n) {
        output.push(arrOfStrings[i]);
    }

    return output;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));