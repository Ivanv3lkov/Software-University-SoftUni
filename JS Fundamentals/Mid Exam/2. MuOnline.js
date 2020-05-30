function solve(input) {
    let rooms = input.shift().split('|');
    let playerHealth = 100;
    let coins = 0;
    let isAlive = true;
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
        console.log(`Bitcoins: ${coins}`);
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
        console.log(`You found ${value} bitcoins.`);
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

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);