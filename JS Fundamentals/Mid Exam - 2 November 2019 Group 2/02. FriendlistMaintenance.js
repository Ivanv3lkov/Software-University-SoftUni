function solve(input) {
    let listOfNames = input.shift().split(', ');
    let blacklistCounter = 0;
    let lostNamesCounter = 0;

    for (let line of input) {
        if (line === 'Report') {
            break;
        }

        let [command, name, newName] = line.split(' ');

        if (command === 'Blacklist') {
            blacklist(name);
        } else if (command === 'Error') {
            let index = Number(name);
            error(index);
        } else {
            let index = Number(name);
            change(index, newName);
        }
    }

    console.log(`Blacklisted names: ${blacklistCounter}`);
    console.log(`Lost names: ${lostNamesCounter}`);
    console.log(listOfNames.join(' '));

    function blacklist(name) {
        let indexOfName = listOfNames.indexOf(name);

        if (indexOfName !== -1) {
            listOfNames[indexOfName] = 'Blacklisted';
            blacklistCounter++;
            console.log(`${name} was blacklisted.`);
        } else {
            console.log(`${name} was not found.`);
        }
    }

    function error(index) {
        let username = listOfNames[index];

        if (username !== 'Blacklisted' && username !== 'Lost') {
            listOfNames[index] = 'Lost';
            lostNamesCounter++;
            console.log(`${username} was lost due to an error.`);
        }
    }

    function change(index, newName) {
        if (index >= 0 && index <= listOfNames.length - 1) {
            console.log(`${listOfNames[index]} changed his username to ${newName}.`);
            listOfNames[index] = newName;
        }
    }
}

solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);