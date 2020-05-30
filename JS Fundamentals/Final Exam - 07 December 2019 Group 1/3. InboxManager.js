function solve(input) {
    let data = {};
    let line = input.shift();

    while (line !== 'Statistics') {
        let [command, username, email] = line.split('->');

        if (command === 'Add') {
            if (data[username]) {
                console.log(`${username} is already registered`);
            } else {
                data[username] = [];
            }
        } else if (command === 'Send') {
            if (data[username]) {
                data[username].push(email);
            }
        } else if (command === 'Delete') {
            if (data[username]) {
                delete data[username];
            } else {
                console.log(`${username} not found!`);
            }
        }
        line = input.shift();
    }

    let arr = Object.entries(data).sort(sort);
    
    function sort(a, b) {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }

    console.log(`Users count: ${arr.length}`);

    arr.forEach(el => {
        let username = el[0];
        let emails = el[1];
        console.log(username);
        for (let email of emails) {
            console.log(`- ${email}`); 
        }

    });
}

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);