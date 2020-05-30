function solve(input) {
    let steps = Number(input.shift());
    let lengthOfStep = Number(input.shift());
    let distance = Number(input.shift());

    let result = 0;
    let shortStep = 0;

    for (let i = 1; i <= steps; i++) {

        if (i % 5 === 0) {
            shortStep = lengthOfStep * 0.70;
            result += shortStep;
        } else {
            result += lengthOfStep;
        }
    }

    result /= 100;
    let diff = result / distance * 100;
    console.log(`You travelled ${diff.toFixed(2)}% of the distance!`);
}

solve(['5000', '7.5', '500']);