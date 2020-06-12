function solve(fruit, weightInGrams, priceKG) {

let weightInKG = weightInGrams / 1000;
let money = weightInKG * priceKG;

return `I need $${money.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`

}

console.log(solve('orange', 2500, 1.80));