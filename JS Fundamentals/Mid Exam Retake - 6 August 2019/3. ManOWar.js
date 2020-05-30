function solve(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let isResult = true;

    let command = input.shift();

    while (command !== 'Retire') {

        let tokens = command.split(' ');

        if (tokens[0] === 'Fire') {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);
            let won = fire(index, damage);

            if (won) {
                isResult = false;
                break;
            }
        } else if (tokens[0] === 'Defend') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);
            success = defend(startIndex, endIndex, damage);
            if (!success) {
                isResult = false;
                break;
            }
        } else if (tokens[0] === 'Repair') {
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);
            repair(index, health);
        } else if (tokens[0] === 'Status') {
            status(pirateShip);
        }

        command = input.shift();
    }
    if (isResult) {
        let pirateShipSum = pirateShip.reduce((acc, currentValue) => acc + currentValue);
        let warShipSum = warShip.reduce((acc, currentValue) => acc + currentValue);

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }

    function fire(index, damage) {
        if (index >= 0 && index < warShip.length) {   // if (warShip[index])
            warShip[index] -= damage;
        }

        if (warShip[index] <= 0) {
            console.log('You won! The enemy ship has sunken.');
            return true;
        }
        return false;
    }

    function defend(startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex <= endIndex && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;

                if (pirateShip[i] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    return false;
                }
            }
        }
        return true;
    }

    function repair(index, health) {
        if (index >= 0 && index < pirateShip.length) {
            pirateShip[index] = Math.min(pirateShip[index] + health, maxHealth);
        }
    }

    function status(pirateShip) {
        let criteria = maxHealth * 0.20;
        let sectionsForRepair = pirateShip.filter((n) => n < criteria);
        let count = sectionsForRepair.length;
        console.log(`${count} sections need repair.`);
    }
}

solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);