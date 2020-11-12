function solve(input) {
    let products = {};

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
            products[product][town] = price;
        }
        products[product][town] = price;
    }

    for (let key in products) { 
        let lowest = (Object.entries(products[key]).reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);