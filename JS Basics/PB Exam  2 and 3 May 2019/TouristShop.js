function solve(input) {
    let budget = Number(input.shift());
    let productName = input.shift();
    let productPrice = Number(input.shift());
   
    let productCosts = 0;
    let productsBought = 0;
    let productsCount = 0;

    while (productName != 'Stop') {
        productsCount++;

        if (productsCount % 3 == 0) {
            productPrice *= 0.5;
        }

        if (budget < productPrice) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }
        productsBought++;
        productCosts += productPrice;
        budget -= productPrice;
         
        productName = input.shift();
        productPrice = Number(input.shift());
    }
    if (productName == 'Stop') {
        console.log(`You bought ${productsBought} products for ${productCosts.toFixed(2)} leva.`);
    }
}

solve([
    '153.20', 'Backpack',
    '25.20',  'Shoes',
    '54',     'Sunglasses',
    '30',     'Stop'
  ]);