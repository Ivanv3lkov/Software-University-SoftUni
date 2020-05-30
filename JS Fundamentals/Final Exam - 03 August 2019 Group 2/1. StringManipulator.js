function solve(input) {
    let string = input.shift();

    for (let line of input) {
        if (line === 'Done') {
            break;
        }

        let [command, firstArgument, secondArgument] = line.split(' ');

        if (command === 'Change') {
            let rgx = new RegExp(firstArgument, 'g');
            string = string.replace(rgx, secondArgument);
            console.log(string);
        } else if (command === 'Includes') {
            console.log(string.includes(firstArgument) ? 'True' : 'False');
        } else if (command === 'End') {
            console.log(string.endsWith(firstArgument) ? 'True' : 'False');
        } else if (command === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        } else if (command === 'FindIndex') {
            console.log(string.indexOf(firstArgument));
        } else if (command === 'Cut') {
            let startIndex = Number(firstArgument);
            let length = Number(secondArgument);
            console.log(string.substr(startIndex, length));
        }
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]
);