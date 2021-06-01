function solve(arrOfCommands) {
    let arrOfNumbers = [];

    for (let i = 0; i < arrOfCommands.length; i++) {
        if (arrOfCommands[i] === 'add') {
            arrOfNumbers.push(i + 1);
        } else if (arrOfCommands[i] === 'remove') {
            arrOfNumbers.pop();
        }
    }

    if (arrOfNumbers.length === 0) {
        return 'Empty';
    } else {
        return arrOfNumbers.join('\n');
    }
}

console.log(solve(['remove',
    'remove',
    'remove']

));