function solve(input) {
    let number = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber > max) {
            max = currentNumber;
        }

        if (currentNumber < min ) {
            min = currentNumber;
           
        }
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}

solve(['5', '10', '20', '304', '0', '50']);