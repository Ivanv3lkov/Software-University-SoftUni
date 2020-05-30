function solve(input) {
    username = input.shift();

    for (let line of input) {
        if (line === 'Sign up') {
            break;
        }

        let [command, firstArgument, secondArgument] = line.split(' ');

        switch (command) {
            case 'Case':
                if (firstArgument === 'lower') {
                    username = username.toLowerCase();
                } else {
                    username = username.toUpperCase();
                }
                console.log(username);
                break;
            case 'Reverse':
                let startIndex = Number(firstArgument);
                let endIndex = Number(secondArgument);
                if (startIndex >= 0 && startIndex < username.length
                    && endIndex >= startIndex && endIndex < username.length) {
                    let substring = username.substring(startIndex, endIndex + 1);
                    console.log(substring.split('').reverse().join(''));
                }
                break;
            case 'Cut':
                if (username.includes(firstArgument)) {
                    username = username.replace(firstArgument, '');
                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${firstArgument}.`);
                }
                break;
            case 'Replace':
                while (username.includes(firstArgument)) {
                    username = username.replace(firstArgument, '*');
                }
                console.log(username);
                break;
            case 'Check':
                if (username.includes(firstArgument)) {
                    console.log('Valid');
                } else {
                    console.log(`Your username must contain ${firstArgument}.`);
                }
                break;
        }
    }
}

solve(
    [
        'ThisIsMyString',
        'Reverse 1 4',
        'Replace i',
        'Cut My',
        'Sign up'

    ]
);