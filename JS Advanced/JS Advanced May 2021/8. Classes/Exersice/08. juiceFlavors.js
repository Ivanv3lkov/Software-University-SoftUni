function juiceFlavors(input) {
    let quantities = {};
    let bottles = {};

    for (let line of input) {
        let [fruit, quantity] = line.split('=>');
        quantity = Number(quantity);

        if (!quantities.hasOwnProperty(fruit)) {
            quantities[fruit] = 0;
        }
        quantities[fruit] += quantity;

        if (quantities[fruit] >= 1000) {
            bottles[fruit] = parseInt(quantities[fruit] / 1000);
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key}=> ${bottles[key]}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
