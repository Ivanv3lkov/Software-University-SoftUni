function solve(input) {
    let gifts = input.shift().split(' ');

    let command = input.shift();

    while (command !== 'No Money') {

        let tokens = command.split(' ');

        if (tokens[0] === 'OutOfStock') {
            let gift = tokens[1];
            outOfStock(gift);
        } else if (tokens[0] === 'Required') {
            let gift = tokens[1];
            let index = Number(tokens[2]);
            required(gift, index);
        } else if (tokens[0] === 'JustInCase') {
            let gift = tokens[1];
            justInCase(gift);
        }

        command = input.shift();
    }

    let result = gifts.filter((n) => n !== 'None');

    console.log(result.join(' '));
    
    function outOfStock(gift) {
        for (let i = 0; i < gifts.length; i++) {
            if (gifts[i] === gift) {
                gifts[i] = 'None'
            }
        }
    }

    function required(gift, index) {
        if (index >= 0 && index < gifts.length) {
            gifts[index] = gift;
        }
    }

    function justInCase(gift) {
        gifts.splice(gifts.length - 1, 1, gift);
    }
}

solve([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);