function solve(input) {
    let storage = new Map();

    for (let line of input) {
        let [item, quantityText] = line.split(' ');
        quantity = Number(quantityText);

        if (storage.has(item)) {
            quantity += storage.get(item);
        }

        storage.set(item, quantity);
    }

    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);