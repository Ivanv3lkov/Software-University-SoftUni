function solve(input) {
    let listOfTanks = input.shift().split(', ');
    let numberOfCommands = Number(input.shift());

    while (numberOfCommands > 0) {
        for (let line of input) {

            let [command, nameOrIndex, name] = line.split(', ');

            if (command === 'Add') {
                add(nameOrIndex);
            } else if (command === 'Remove') {
                remove(nameOrIndex);
            } else if (command === 'Remove At') {
                nameOrIndex = Number(nameOrIndex);
                removeAt(nameOrIndex);
            } else {
                nameOrIndex = Number(nameOrIndex);
                insert(nameOrIndex, name);
            }

            numberOfCommands--;
        }
    }
    console.log(listOfTanks.join(', '));


    function add(tankName) {
        let isAvailable = listOfTanks.includes(tankName);

        if (isAvailable) {
            console.log('Tank is already bought');
        } else {
            console.log('Tank successfully bought');
            listOfTanks.push(tankName);
        }
    }

    function remove(tankName) {
        let indexOfTank = listOfTanks.indexOf(tankName);

        if (indexOfTank !== -1) {
            console.log('Tank successfully sold');
            listOfTanks.splice(indexOfTank, 1);
        } else {
            console.log('Tank not found');
        }
    }

    function removeAt(index) {

        if (index >= 0 && index <= listOfTanks.length - 1) {
            listOfTanks.splice(index, 1);
            console.log('Tank successfully sold');
        } else {
            console.log('Index out of range');
        }
    }

    function insert(index, tankName) {

        if (index >= 0 && index <= listOfTanks.length - 1) {
            let indexOfTank = listOfTanks.indexOf(tankName);
            if (indexOfTank === -1) {
                listOfTanks.splice(index, 0, tankName);
                console.log('Tank successfully bought');
            } else {
                console.log('Tank is already bought');
            }
        } else {
            console.log('Index out of range');
        }
    }
}

solve([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ]
  );