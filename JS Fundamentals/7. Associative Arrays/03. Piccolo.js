function solve(input) {

    function fillParkingInfo(input) {
        let parking = {};
        for (let line of input) {
            let [direction, carNumber] = line.split(', ')
            parking[carNumber] = direction;

        }
        return parking;
    }

    function filterCarsIn(parking) {
        let output = [];
        Object.entries(parking).forEach(entry => {
            if (entry[1] === 'IN') {
                output.push(entry[0]);
            }
        });
        return output;
    }

    function getOutput(arr) {
        if (arr.length === 0) {
            'Parking Lot is Empty'
        } else {
            arr = arr.sort((a, b) => a.localeCompare(b)).join('\n');
        }
        return arr;
    }

    let parking = fillParkingInfo(input);
    let output = filterCarsIn(parking);
    console.log(getOutput(output));
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