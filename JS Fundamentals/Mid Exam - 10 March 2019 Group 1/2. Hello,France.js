function solve(input) {
    let itemsWithPrices = input[0].split('|');
    let budget = Number(input[1]);
    let prices = [];

    for (let el of itemsWithPrices) {
        let [item, price] = el.split('->');
        price = Number(price);

        let isValid = isPriceValid(item, price);

        if (isValid && budget >= price) {
            budget -= price;
            price *= 1.40;
            prices.push(price.toFixed(2));
        }
    }
    let income = prices.map(Number).reduce((acc, currentValue) => acc + currentValue, budget);
    let profit = income - input[1];

    console.log(prices.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);

    if (income >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }

    function isPriceValid(item, price) {

        if (item === 'Clothes' && price <= 50) {
            return true;
        }

        if (item === 'Shoes' && price <= 35) {
            return true;
        }

        if (item === 'Accessories' && price <= 20.50) {
            return true;
        }

        return false;
    }
}

solve([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
]);