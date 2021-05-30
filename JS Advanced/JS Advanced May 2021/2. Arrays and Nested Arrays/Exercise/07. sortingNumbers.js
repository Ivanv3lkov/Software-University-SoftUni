function solve(arrOfNumbers) {
    let output = [];
    arrOfNumbers.sort((a, b) => a - b);

    while (arrOfNumbers.length > 0) {
        output.push(arrOfNumbers.shift());
        if (arrOfNumbers.length !== 0) {
            output.push(arrOfNumbers.pop());
        }
    }
    return output;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));