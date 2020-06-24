function solve(input) {
    let string = input.shift();
    let line = input.shift();

    while (line !== 'Finish') {
        let [command, firstArgument, secondArgument] = line.split(' ');

        if (command === 'Replace') {
            let rgx = new RegExp(firstArgument, 'g');
            string = string.replace(rgx, secondArgument);
            console.log(string);
        } else if (command === 'Cut') {
            let startIndex = Number(firstArgument);
            let endIndex = Number(secondArgument);
            let message = '';
            if (startIndex >= 0 && startIndex < string.length &&
                endIndex >= 0 && endIndex < string.length) {
                message = string.substring(0, startIndex) + string.substring(endIndex + 1);
                console.log(message);
            } else {
                console.log('Invalid indexes!');
            }
        } else if (command === 'Make') {
            if (firstArgument === 'Upper') {
                string = string.toUpperCase();
            } else if (firstArgument === 'Lower') {
                string = string.toLowerCase();
            }
            console.log(string);
        } else if (command === 'Check') {
            if (string.includes(firstArgument)) {
                console.log(`Message contains ${firstArgument}`);
            } else {
                console.log(`Message doesn't contain ${firstArgument}`);
            }
        } else if (command === 'Sum') {
            let startIndex = Number(firstArgument);
            let endIndex = Number(secondArgument);
            let sum = 0;
            let currentString = '';
            if (startIndex >= 0 && startIndex < string.length &&
                endIndex >= 0 && endIndex < string.length) {
                currentString = string.substring(startIndex, endIndex + 1);
                for (let i = 0; i < currentString.length; i++) {
                    let ascii = currentString.charCodeAt(i);
                    sum += ascii;
                }
                console.log(sum);
            } else {
                console.log('Invalid indexes!');
            }
        }
        line = input.shift();
    }
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  
);