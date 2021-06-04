function solve(input) {
    let catalogue = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let letter = product[0];
        if (!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    }

    let sortedCatalogue = Object.keys(catalogue).sort(sorting);

    for (let el of sortedCatalogue) {
        console.log(el);
        let sortedProducts = Object.keys(catalogue[el]).sort(sorting);
        for (let p of sortedProducts) {
            console.log(`  ${p}: ${catalogue[el][p]}`);
        }
    }

    function sorting(a, b) {
        return a.localeCompare(b);
    }
}


solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);