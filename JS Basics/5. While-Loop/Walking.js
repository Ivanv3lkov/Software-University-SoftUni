function solve(input) {
    let command = input.shift();

    let stepsSum = 0;

    while (command != 'Going home') {
        let steps = Number(command);
        stepsSum += steps;

        if (stepsSum >= 10000) {
            break;
        }
        command = input.shift()
    }

    if (command === `Going home`) {
        stepsSum += Number(input.shift());
    }

    if (stepsSum >= 10000) {
        console.log(`Goal reached! Good job!`);
    } else {
        console.log(`${10000 - stepsSum} more steps to reach goal.`)
    }
}

solve([1500, 300, 2500, 3000, 'Going home', 200]);