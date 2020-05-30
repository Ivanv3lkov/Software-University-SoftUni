function solve(input) {
    let storage = new Map();

    for (let line of input) {
        let [item, quantityText] = line.split(' ');
        quantity = Number(quantityText);

        if (!storage.has(item)) {
            storage.set(item, quantity);
        } else {
            let currentQuantity = storage.get(item);
            let newQuantity = currentQuantity + quantity;
            storage.set(item, newQuantity);
        }
    }
    
    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);