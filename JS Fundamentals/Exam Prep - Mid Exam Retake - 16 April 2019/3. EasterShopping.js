function solve(input) {
    let listOfShops = input.shift().split(' ');
    let numberOfCommands = Number(input.shift());

    for (let command = 1; command <= numberOfCommands; command++) {

        let tokens = input.shift().split(' ');

        if (tokens[0] === 'Include') {
            let shop = tokens[1];
            include(shop);
        } else if (tokens[0] === 'Visit') {
            let numberOfShops = Number(tokens[2]);
            if (tokens[1] === 'first') {
                visitFirst(numberOfShops);
            } else if (tokens[1] === 'last') {
                visitLast(numberOfShops);
            }
        } else if (tokens[0] === 'Prefer') {
            let shopIndexOne = Number(tokens[1]);
            let shopIndexTwo = Number(tokens[2]);
            prefer(shopIndexOne, shopIndexTwo)
        } else if (tokens[0] === 'Place') {
            let shop = tokens[1];
            let shopIndex = Number(tokens[2]);
            place(shop, shopIndex)
        }
    }
    console.log('Shops left:');
    console.log(`${listOfShops.join(' ')}`);
    
    function include(shop) {
        listOfShops.push(shop);
    }

    function visitFirst(numberOfShops) {
        if (listOfShops.length >= numberOfShops) {
            listOfShops.splice(0, numberOfShops);
        }
    }

    function visitLast(numberOfShops) {
        if (listOfShops.length >= numberOfShops) {
            listOfShops.reverse().splice(0, numberOfShops);
            listOfShops.reverse();
        }
    }

    function prefer(shopIndexOne, shopIndexTwo) {
        if (listOfShops[shopIndexOne] && listOfShops[shopIndexTwo]) {
            let temp = listOfShops[shopIndexOne];
            listOfShops[shopIndexOne] = listOfShops[shopIndexTwo];
            listOfShops[shopIndexTwo] = temp;
        }
    }

    function place(shop, shopIndex) {
        shopIndex++;
        if (shopIndex >= 0 && shopIndex < listOfShops.length) {
            listOfShops.splice(shopIndex, 0, shop);
        }
    }
}

solve([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);