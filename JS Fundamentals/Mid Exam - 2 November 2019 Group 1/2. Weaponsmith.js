function solve(input) {
    let weapon = input.shift().split('|');
    let command = input.shift();

    while (command !== 'Done') {
        let tokens = command.split(' ');

        if (tokens[1] === 'Left') {
            let index = Number(tokens[2]);
            moveLeft(index);
        } else if (tokens[1] === 'Right') {
            let index = Number(tokens[2]);
            moveRight(index);
        } else if (tokens[1] === 'Even') {
            checkEven();
        } else if (tokens[1] === 'Odd') {
            checkOdd();
        }

        command = input.shift();
    }
    console.log(`You crafted ${weapon.join('')}!`);

    function moveLeft(index) {
        if (index > 0 && index <= weapon.length - 1) {
           let part = weapon.splice(index, 1);
           weapon.splice(index - 1, 0, part)
        }
    }

    function moveRight(index) {
        if (index >= 0 && index < weapon.length - 1) {
        let part = weapon.splice(index, 1);
        weapon.splice(index + 1, 0, part);
        }
    }

    function checkEven() {
        let evenParts = [];
        for (let i = 0; i < weapon.length; i++) {
            if (i % 2 === 0) {
                evenParts.push(weapon[i])
            }
        }
        console.log(evenParts.join(' '));
    }

    function checkOdd() {
        let oddParts = [];
        for (let i = 0; i < weapon.length; i++) {
            if (i % 2 === 1) {
                oddParts.push(weapon[i]);
            }
        }
        console.log(oddParts.join(' '));
    }
}

solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);