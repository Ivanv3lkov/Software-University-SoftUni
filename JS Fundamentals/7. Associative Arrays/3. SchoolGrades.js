function solve(input) {
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number);

        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }
    }

    let sorted = Array.from(map.entries()).sort((a, b) => average(a, b));

    let result = new Map(sorted);

    for (let [name, grades] of result) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function average(a, b) {
        let aSum = 0;

        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }

        let bSum = 0;

        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);