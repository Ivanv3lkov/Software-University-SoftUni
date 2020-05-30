function solve(input) {
    let items = input.shift().split(', ');

    let command = input.shift();

    while (command !== 'Craft!') {

        let tokens = command.split(' - ');

        if (tokens[0] === 'Collect') {
            let item = tokens[1];
            collect(item);
        } else if (tokens[0] === 'Drop') {
            let item = tokens[1];
            drop(item);
        } else if (tokens[0] === 'Combine Items') {
            let combineTokens = tokens[1].split(':');
            let oldItem = combineTokens[0];
            let newItem = combineTokens[1];
            combine(oldItem, newItem)
        } else if (tokens[0] === 'Renew') {
            let item = tokens[1];
            renew(item);
        }

        command = input.shift();
    }

    console.log(items.join(', '));

    function collect(item) {
        let isExists = items.includes(item);

        if (!isExists) {
            items.push(item);
        }
    }

    function drop(item) {
        let indexOfItem = items.indexOf(item);

        if (indexOfItem !== -1) {
            items.splice(indexOfItem, 1);
        }
    }

    function combine(oldItem, newItem) {
        let indexOfOldItem = items.indexOf(oldItem);

        if (indexOfOldItem !== -1) {
            indexOfOldItem++;
            items.splice(indexOfOldItem, 0, newItem);
        }
    }

    function renew(item) {
        let indexOfItem = items.indexOf(item);

        if (indexOfItem !== -1) {
            items.push(items.splice(indexOfItem, 1))
        }
    }
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);