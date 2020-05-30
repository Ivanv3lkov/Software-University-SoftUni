function flowers(input) {
    let chrysanthemumCount = Number(input.shift());  // закупени хризантеми 
    let rosesCount = Number(input.shift()); // закупените рози 
    let tulipsCount = Number(input.shift()); // закупените лалета 
    let season = input.shift();
    let holiday = input.shift();

    let totalFlowers = chrysanthemumCount + rosesCount + tulipsCount;

    let chrysanthemumPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season == 'Spring' || season == 'Summer') {
        chrysanthemumPrice = chrysanthemumCount * 2;
        rosesPrice = rosesCount * 4.10;
        tulipsPrice = tulipsCount * 2.50;
    } else if (season == 'Autumn' || season == 'Winter') {
        chrysanthemumPrice = chrysanthemumCount * 3.75;
        rosesPrice = rosesCount * 4.50;
        tulipsPrice = tulipsCount * 4.15;
    }

    let totalSum = chrysanthemumPrice + rosesPrice + tulipsPrice

    if (holiday == 'Y') {
        totalSum *= 1.15;
    }

    if (season == "Spring" && tulipsCount >= 7) {
        totalSum *= 0.95;
    }

    if (season == "Winter" && rosesCount >= 10) {
        totalSum *= 0.9;
    }

    if (totalFlowers > 20) {
        totalSum *= 0.80;
    }

    console.log((totalSum + 2).toFixed(2));
}

flowers(['10','10','10','Autumn','N']);
