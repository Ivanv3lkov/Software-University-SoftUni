function solve(input) {
    let line = input.shift();
    let obj = {};
    let countUnlikedMeals = 0;
    
    while (line !== 'Stop') {
        let [command, guest, meal] = line.split('-');

        if (command === 'Like') {
            if (!obj[guest]) {
                obj[guest] = [];
                obj[guest].push(meal);
            } else {
                if (!obj[guest].includes(meal)) {
                    obj[guest].push(meal);
                }
            }
        } else if (command === 'Unlike') {
            if (!obj[guest]) {
                console.log(`${guest} is not at the party.`);
            } else if (obj[guest].includes(meal)) {
                let indexOfMeal = obj[guest].indexOf(meal);
                obj[guest].splice(indexOfMeal, 1);
                countUnlikedMeals++;
                console.log(`${guest} doesn't like the ${meal}.`);
            } else if (!obj[guest].includes(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
            }
        }
        line = input.shift()
    }

    let arr = Object.entries(obj).sort(sort)

    function sort(a, b) {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }

    arr.forEach(el => {
        let guest = el[0];
        let meals = el[1];
        console.log(`${guest}: ${meals.join(', ')}`);
    })
    console.log(`Unliked meals: ${countUnlikedMeals}`);
}

solve([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]
);