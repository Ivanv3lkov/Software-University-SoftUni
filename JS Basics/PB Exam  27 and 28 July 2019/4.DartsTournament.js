function solve(input) {
    let initialPoints = Number(input.shift());
    let sector = input.shift();
    let currentPoints = Number(input.shift());

    let turnsCount = 0;

    while (sector != "bullseye") {
        turnsCount++;

        if (sector == "number section") {
            initialPoints -= currentPoints;
        } else if (sector == "double ring") {
            initialPoints -= currentPoints * 2;
        } else if (sector == "triple ring") {
            initialPoints -= currentPoints * 3;
        }

        if (initialPoints == 0) {
            console.log(`Congratulations! You won the game in ${turnsCount} moves!`);
            break;
        } else if (initialPoints < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(initialPoints)}.`);
            break;
        }
        sector = input.shift();
        currentPoints = Number(input.shift());
    }

    if (sector == "bullseye") {
        console.log(`Congratulations! You won the game with a bullseye in ${++turnsCount} moves!`);
    }
}
solve([
    101,
    "triple ring",
    7,
    "double ring",
    19,
    "bullseye"
]);