function solve(input) {
    let startInterval = Number(input.shift());
    let endInterval = Number(input.shift());
    let magicNumber = Number(input.shift());

    let combination = 0;
    let isFound = false;

    for (let a = startInterval; a <= endInterval; a++) {
        for (let b = startInterval; b <= endInterval; b++) {
            let result = a + b;
            combination += 1;

            if (result == magicNumber) {
                isFound = true;
                console.log(`Combination N:${combination} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}

solve([1, 10, 5]);