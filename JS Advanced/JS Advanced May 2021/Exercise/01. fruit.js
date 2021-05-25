function printFruitMessage(fruit, weightInGrams, priceKG) {
    let weightInKG = weightInGrams / 1000;
    let totalMoney = weightInKG * priceKG;

    return `I need $${totalMoney.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`
}

console.log(printFruitMessage('orange', 2500, 1.80));