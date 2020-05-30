function solve(input) {
    let peopleCount = Number(input.shift());
    let taxEntry = Number(input.shift());
    let sunbedPrice = Number(input.shift());
    let umbrellaPrice= Number(input.shift());

    let sumTaxEntry = peopleCount * taxEntry;
    let sumSunbed = Math.ceil(peopleCount * 0.75) * sunbedPrice;
    let sumUmbrella = Math.ceil(peopleCount * 0.5) * umbrellaPrice;
    
    let totalSum = sumTaxEntry + sumUmbrella + sumSunbed;

    console.log(`${totalSum.toFixed(2)} lv.`);
}
solve(["21", "5.50", "4.40", "6.20"]);