function solve(input) {
    let listOfNames = input.shift().split(' ');

    for (let command of input) {

        let tokens = command.split(' ');

        if (tokens[0] === 'Join') {
            let name = tokens[1]
            join(name);
        } else if (tokens[0] === 'Jump') {
            let name = tokens[1];
            let index = Number(tokens[2]);
            jump(name, index);
        } else if (tokens[0] === 'Dive') {
            let index = Number(tokens[1]);
            dive(index);
        } else if (tokens[0] === 'First') {
            let count = Number(tokens[1]);
            first(count);
        } else if (tokens[0] === 'Last') {
            let count = Number(tokens[1]);
            last(count);
        } else if (tokens[1] === 'Normal') {
            console.log(`Frogs: ${listOfNames.join(' ')}`);
            break;
        } else if (tokens[1] === 'Reversed') {
            console.log(`Frogs: ${listOfNames.reverse().join(' ')}`);
            break;
        }
    }

    function join(name) {
        let isExists = listOfNames.includes(name);

        if (!isExists) {
            listOfNames.push(name);
        }
    }

    function jump(name, index) {
        let isExists = listOfNames.includes(name);

        if ((index >= 0 && index < listOfNames.length) && !isExists) {
            listOfNames.splice(index, 0, name);
        }
    }

    function dive(index) {
        if (index >= 0 && index < listOfNames.length) {
            listOfNames.splice(index, 1);
        }
    }

    function first(count) {
        let result = listOfNames.slice(0, count);
        console.log(result.join(' '));
    }

    function last(count) {
        let result = listOfNames.reverse().slice(0, count);

        console.log(result.reverse().join(' '));
        listOfNames.reverse();
    }
}

solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]);
