function solve(input) {
    let list = [];

    for (let line of input) {
        let tokens = line.split(' ');

        if (tokens.length === 3) {
           isGoing(tokens[0]);
        } else if (tokens.length === 4) {
           isNotGoing(tokens[0]);
        }
    }

    list
        .forEach(element => console.log(element));

    function isGoing(name) {
        let isIncluded = list.includes(name);

        if (isIncluded) {
            console.log(`${name} is already in the list!`);
        } else {
            list.push(name);
        }
        return list;
    }

    function isNotGoing(name) {
        let indexOfName = list.indexOf(name);

        if (indexOfName !== -1) {
            list.splice(indexOfName, 1);
        } else {
            console.log(`${name} is not in the list!`);
        }
        return list;
    }
}

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)