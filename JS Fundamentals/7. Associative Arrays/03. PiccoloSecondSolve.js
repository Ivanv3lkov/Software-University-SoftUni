function solve(input) {
    let parking = {};

    for (let line of input) {
        let [direction, carNumber] = line.split(', ')
        parking[carNumber] = direction;
    }

    let output = [];

    Object.entries(parking).forEach(entry => {
        if (entry[1] === 'IN') {
            output.push(entry[0]);
        }
    });

    if (output.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        output = output.sort((a, b) => a.localeCompare(b)).join('\n');
        console.log(output);
    }
}

solve(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]
);