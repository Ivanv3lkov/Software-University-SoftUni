function solve(array) {
    let catalogue = [];

    for (let element of array) {
        let [name, price] = element.split(' : ');
        let product = {
            name,
            price,
            letter: name[0]
        }
        catalogue.push(product);
    }
    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    for (let i = 65; i <= 90; i++) {
        letter = String.fromCharCode(i);
        let output = [];

        for (let product of catalogue) {
            if (product.letter === letter) {
                output.push(product);
            }
        }

        if (output.length > 0) {
            console.log(letter);

            for (let product of output) {
                console.log(`  ${product.name}: ${product.price}`)
            }
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);