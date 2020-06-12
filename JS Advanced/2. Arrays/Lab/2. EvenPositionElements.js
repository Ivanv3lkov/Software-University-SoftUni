function solve(input) {
    let sum = input.filter((x, index) => index % 2 === 0).join(' ');

    return sum;
}

console.log(solve(['20', '30', '40']));

