function solve(input) {
    let email = input.shift();
    let line = input.shift();

    while (line !== 'Complete') {
        let command = line.split(' ');

        if (command[0] === 'Make') {
            if (command[1] === 'Upper') {
                email = email.toUpperCase()
                console.log(email);
            } else if (command[1] === 'Lower') {
                email = email.toLowerCase()
                console.log(email);
            }
        } else if (command[0] === 'GetDomain') {
            let count = Number(command[1]);
            let domain = email.substring(email.length - count)
            console.log(domain);
        } else if (command[0] === 'GetUsername') {
            if (!email.includes('@')) {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            } else {
                let indexOfSymbol = email.indexOf('@');
                console.log(email.substring(0, indexOfSymbol));
            }
        } else if (command[0] === 'Replace') {
            let rgx = new RegExp(command[1], 'g');
            email = email.replace(rgx, '-');
            console.log(email);
        } else if (command[0] === 'Encrypt') {
            let result = '';
            for (let i = 0; i < email.length; i++) {
                result += `${email.charCodeAt(i)} `;
            }
            console.log(result);
        }

        line = input.shift();
    }
}

solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
]

);