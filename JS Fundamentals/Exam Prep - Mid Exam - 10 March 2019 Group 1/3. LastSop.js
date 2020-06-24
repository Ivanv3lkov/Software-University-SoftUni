function solve(input) {
    let collection = input.shift().split(' ').map(n => Number(n));

    let command = input.shift();

    while (command !== 'END') {

        let tokens = command.split(' ');

        if (tokens[0] === 'Change') {
            let firstNum = Number(tokens[1]);
            let secondNum = Number(tokens[2]);
            change(firstNum, secondNum);
        } else if (tokens[0] === 'Hide') {
            let number = Number(tokens[1]);
            hide(number);
        } else if (tokens[0] === 'Switch') {
            let firstNum = Number(tokens[1]);
            let secondNum = Number(tokens[2]);
            switching(firstNum, secondNum);
        } else if (tokens[0] === 'Insert') {
            let index = Number(tokens[1]);
            let number = Number(tokens[2]);
            insert(index, number);
        } else if (tokens[0] === 'Reverse') {
            reverse(collection);
        }
        command = input.shift();
    }

    console.log(collection.join(' '));
    
    function change(oldNum, newNum) {
        let indexOfOldNum = collection.indexOf(oldNum);

        if (indexOfOldNum !== -1) {
            collection.splice(indexOfOldNum, 1, newNum);
        }
    }

    function hide(number) {
        let indexOfNumber = collection.indexOf(number);

        if (indexOfNumber !== -1) {
            collection.splice(indexOfNumber, 1);
        }
    }

    function switching(firstNum, secondNum) {
        let indexOfFirstNum = collection.indexOf(firstNum);
        let indexOfSecondNum = collection.indexOf(secondNum);

        if (indexOfFirstNum !== -1 && indexOfSecondNum !== -1) {
            collection[indexOfFirstNum] = secondNum;
            collection[indexOfSecondNum] = firstNum;
        }
    }

    function insert(index, number) {
        index++;

        if (index >= 0 && index < collection.length) {
            collection.splice(index, 0, number);
        }
    }

    function reverse(collection) {
        return collection.reverse()
    }
}

solve([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
]);