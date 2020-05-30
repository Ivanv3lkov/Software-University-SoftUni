function solve(input) {
    let initialPoints = Number(input.shift());
    let sector = input.shift();

    let turnsCount = 0;

    while (sector != 'bullseye') {
        let points = Number(input.shift());
        turnsCount++;

        if (sector == 'number section') {
            points = points;
        } else if (sector == 'double ring') {
            points = 2 * points
        } else if (sector == 'triple ring') {
            points = 3 * points
        }
        
        
        initialPoints -= points;
        

        if (initialPoints < 0) {
            console.log(`Sorry, you lost. Score difference: ${Math.abs(initialPoints)}.`);
            break;
        } else if (initialPoints == 0) {
            console.log(`Congratulations! You won the game in ${turnsCount} moves!`);
            break;
        }
        
        sector = input.shift();
    }

    if (sector == 'bullseye') {
        console.log(`Congratulations! You won the game with a bullseye in ${++turnsCount} moves!`);
    }
}

solve([101,'triple ring',7,'double ring',19,'bullseye']);