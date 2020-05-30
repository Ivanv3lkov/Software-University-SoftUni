function solve(input) {
    let num = Number(input.shift());

    let output = "";

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let n = 1; n <= 9; n++) {
                    let sumFirstTwoDigits = i + j;
                    let sumLastTwoDigits = k + n;

                    if (sumFirstTwoDigits == sumLastTwoDigits && num % sumFirstTwoDigits == 0) {
                        output += `${i}${j}${k}${n} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

solve([24]);