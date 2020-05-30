function solve(input) {
    let rooms = input[0].split('|');
    let isAlive = true;
    let playerHealth = 100;
    let coins = 0;
    let roomsCount = 0;

    for (let room of rooms) {
        roomsCount++;
        let [command, number] = room.split(' ');
        number = Number(number);

        if (command === 'potion') {
            drinkPotion(number);
        } else if (command === 'chest') {
            collectCoins(number);
        } else {
            isAlive = fight(command, number);

            if (!isAlive) {
                break;
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${playerHealth}`);
    }

    function drinkPotion(health) {
        let increasedHealth = Math.min(playerHealth + health, 100);

        console.log(`You healed for ${increasedHealth - playerHealth} hp.`);
        playerHealth = increasedHealth;
        console.log(`Current health: ${playerHealth} hp.`);
    }

    function collectCoins(value) {
        coins += value;
        console.log(`You found ${value} coins.`);
    }

    function fight(monster, damage) {
        let decreasedHealth = playerHealth - damage;

        if (decreasedHealth <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${roomsCount}`);

            return false;
        }

        playerHealth = decreasedHealth;
        console.log(`You slayed ${monster}.`);

        return true;
    }
}
solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);