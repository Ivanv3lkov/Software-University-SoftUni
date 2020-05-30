function solve(input) {
    let name = input.shift();

    let maxSum = Number.MIN_SAFE_INTEGER;
    let winner = "";

    while (name !== "STOP") {
        let sum = 0;

        for (i = 0; i < name.length; i++) {
            sum += name.charCodeAt(i);
        }

        if (sum > maxSum) {
            maxSum = sum;
            winner = name;
        }
        name = input.shift();
    }
    console.log(`Winner is ${winner} - ${maxSum}!`);
}

solve(["Petar", "Georgi", "Stanimir", "STOP"]);