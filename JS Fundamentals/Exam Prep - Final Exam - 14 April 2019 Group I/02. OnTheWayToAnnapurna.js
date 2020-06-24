function solve(input) {
    let line = input.shift();
    let diary = {};

    while (line !== 'END') {
        let [command, store, items] = line.split('->');

        if (command === 'Add') {
            let arrItems = items.split(',');

            if (!diary.hasOwnProperty(store)) {
                diary[store] = [];
            }
            diary[store] = diary[store].concat(arrItems);
        } else if (command === 'Remove') {
            if (diary[store]) {
                delete diary[store];
            }
        }

        line = input.shift();
    }

    let arrOfStores = Object.entries(diary).sort(sort);

    function sort(a, b) {
        return b[1].length - a[1].length || b[0].localeCompare(a[0]);
    }

    console.log('Stores list:');

    for (let el of arrOfStores) {
        let store = el[0];
        let items = el[1];
        console.log(store);
        for (let item of items) {
            console.log(`<<${item}>>`);
        }
    }
}

solve([
    'Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END'
]

);
