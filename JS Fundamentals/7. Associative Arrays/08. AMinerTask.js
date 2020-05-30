function solve(input) {
    let collection = {};

    for (let i = 0; i < input.length; i += 2) {
        let element = input[i];
        let quantity = Number(input[i + 1])

        if (!collection.hasOwnProperty(element)) {
            collection[element] = quantity;
        } else {
            collection[element] += quantity;
        }
    }

    for (let resource in collection) {
        console.log(`${resource} -> ${collection[resource]}`);
    }
}

solve(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
        ]
        

);