function solve(input) {
    let str = input.shift();
    let cmd = input.shift().split(' ');

    while (cmd[0] !== 'End') {
        if (cmd[0] === 'Translate') {
            let rgx = new RegExp(cmd[1], 'g');
            str = str.replace(rgx, cmd[2]);
            console.log(str);
        } else if (cmd[0] === 'Includes') {
            console.log(str.includes(cmd[1]) ? 'True' : 'False');
        } else if (cmd[0] === 'Start') {
            console.log(str.startsWith(cmd[1]) ? 'True' : 'False');
        } else if (cmd[0] === 'Lowercase') {
            str = str.toLowerCase();
            console.log(str);
        } else if (cmd[0] === 'FindIndex') {
            console.log(str.lastIndexOf(cmd[1]));
        } else if (cmd[0] === 'Remove') {
            let end = Number(cmd[1]) + Number(cmd[2]);
            str = str.substring(0, cmd[1]) + str.substring(end);
            console.log(str);
        }

        cmd = input.shift().split(' ');
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]
);