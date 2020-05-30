function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 !== 0) {
            let currentNum = input[i] * 2;
            result.push(currentNum);
        }
    }

    console.log(result.reverse().join(' '));
}

solve([10, 15, 20, 25]);