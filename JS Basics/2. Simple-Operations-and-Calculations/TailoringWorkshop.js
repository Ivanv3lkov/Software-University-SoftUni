function tailoringWorkshop(input) {
    let countTables = Number(input.shift());
    let lenght = Number(input.shift());
    let width = Number(input.shift());

    let clothArea = countTables * (lenght + 2 * 0.30) * (width + 2 * 0.30);
    let carreArea = countTables * (lenght * 1 / 2) * (lenght * 1 / 2);
    let priceInUSD = clothArea * 7 + carreArea * 9;
    let priceInBGN = priceInUSD * 1.85;

    console.log(`${priceInUSD.toFixed(2)} USD`);
    console.log(`${priceInBGN.toFixed(2)} BGN`);
}

tailoringWorkshop(['5', '1.00', '0.50']);