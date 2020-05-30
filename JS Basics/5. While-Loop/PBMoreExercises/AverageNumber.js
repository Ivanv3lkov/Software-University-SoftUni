function solve(input) {
    let n = Number(input.shift());

    let counter = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let currentNumber = Number(input[i]);
        counter++;
        sum += currentNumber;
    }
    console.log((sum / counter).toFixed(2));
}

solve(['2', '6', '4']);