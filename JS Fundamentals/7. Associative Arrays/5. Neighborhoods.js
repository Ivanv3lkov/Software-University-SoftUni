function solve(input) {
    let neighborhoods = new Map();

    input.shift().split(', ').forEach((name) => neighborhoods.set(name, []))

    for (let line of input) {
        let [neighborhoodName, person] = line.split(' - ');

        if (neighborhoods.has(neighborhoodName)) {
            neighborhoods.get(neighborhoodName).push(person);
        }
    }

    let sorted = Array.from(neighborhoods.entries()).sort((a, b) => b[1].length - a[1].length);
    
    let result = new Map(sorted);
   
    for (let [neighborhoodName, residents] of result) {
        console.log(`${neighborhoodName}: ${residents.length}`);

        residents.forEach(person => console.log(`--${person}`));
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);