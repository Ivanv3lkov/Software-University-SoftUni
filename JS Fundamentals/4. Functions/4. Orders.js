function solve(product, quantity) {
    const coffeePrice = 1.50;
    const waterPrice = 1;
    const cokePrice = 1.40;
    const snacksPrice = 2;

    const coffeeOrder = (coffeePrice, n) => coffeePrice * n;
    const waterOrder = (waterPrice, n) => waterPrice * n;
    const cokeOrder = (cokePrice, n) => cokePrice * n;
    const snacksOrder = (snacksPrice, n) => snacksPrice * n;

    let result = 0;

    if (product === 'coffee') {
        result = coffeeOrder(coffeePrice, quantity);
    } else if (product === 'water') {
        result = waterOrder(waterPrice, quantity);
    } else if (product === 'coke') {
        result = cokeOrder(cokePrice, quantity);
    } else if (product === 'snacks') {
        result = snacksOrder(snacksPrice, quantity);
    }

  console.log(result.toFixed(2));
}
solve('water', 5);


