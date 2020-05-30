function vegetableMarket(input) {
    let priceVegetables = Number(input.shift());
    let priceFruits = Number(input.shift());
    let totalKgVegetables = Number(input.shift());
    let totalKgFruits = Number(input.shift());

    let totalPriceVegetables = priceVegetables * totalKgVegetables;
    let totalPriceFruits = priceFruits * totalKgFruits;
    let result = (totalPriceVegetables + totalPriceFruits) / 1.94;

    console.log(result.toFixed(2));

}

vegetableMarket(['0.194', '19.4', '10', '10']);