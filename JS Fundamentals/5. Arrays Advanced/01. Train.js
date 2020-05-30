function solve(input) {
    let wagons = input.shift().split(' ').map((a) => Number(a));
    let maxCap = Number(input.shift());

    for (let line of input) {
        let tokens = line.split(' ');

        if (tokens.length === 2) {
            wagons.push(Number(tokens[1]));
        } else if (tokens.length === 1) {
            let passengersToAdd = Number(tokens[0])
            for (let i = 0; i < wagons.length; i++) {
                if (passengersToAdd + wagons[i] <= maxCap) {
                    wagons[i] += passengersToAdd;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}

console.log(solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']));



