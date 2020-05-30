function solve(input) {
    let initialLoot = input.shift().split('|');

    let command = input.shift();

    while (command !== 'Yohoho!') {

        let tokens = command.split(' ');
        let currCommand = tokens.shift();

        if (currCommand === 'Loot') {
            let items = tokens.slice(0);
            loot(items);
        } else if (currCommand === 'Drop') {
            let index = Number(tokens[0]);
            drop(index);
        } else if (currCommand === 'Steal') {
            let count = Number(tokens[0]);
            steal(count);
        }

        command = input.shift();
    }
   
    if (initialLoot.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let totalLength = 0;
        for (let i = 0; i < initialLoot.length; i++) {
            totalLength += initialLoot[i].length;
        }
        let averageGain = totalLength / initialLoot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }

    function loot(items) {
        for (let i = 0; i < items.length; i++) {
            let currentItem = items[i];
            if (!initialLoot.includes(currentItem)) {
                initialLoot.unshift(currentItem);
            }
        }
    }

    function drop(index) {
        if (index >= 0 && index < initialLoot.length) {
            let droppedItem = initialLoot.splice(index, 1);
            initialLoot.push(droppedItem);
        }
    }

    function steal(count) {
        let itemsReversed = initialLoot.reverse().splice(0, count);
        console.log(itemsReversed.reverse().join(', '));

        initialLoot.reverse();
    }
}

solve([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);