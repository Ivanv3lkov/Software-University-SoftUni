function solve(input) {
    let broiButilkiPreparat  = Number(input.shift());
    let broiSudove = input.shift();

    let sudove = 0;
    let counter = 1;
    let totalMlPreparat = broiButilkiPreparat  * 750;
    let izrazhodvanPreparatChinii = 0;
    let izrazhodvanPreparatTendjeri = 0;
    let izrazhodvanPreparat = 0;
    let broiChinii = 0;
    let broiTendjeri = 0;
    
    while (broiSudove != 'End') {
        sudove = Number(broiSudove);

        if (counter % 3 === 0) {
            izrazhodvanPreparatTendjeri = sudove * 15;
            totalMlPreparat = (totalMlPreparat - izrazhodvanPreparatTendjeri);
            broiTendjeri += sudove;
            izrazhodvanPreparat = izrazhodvanPreparatTendjeri;
        } else {
            izrazhodvanPreparatChinii = sudove * 5;
            totalMlPreparat = (totalMlPreparat - izrazhodvanPreparatChinii);
            broiChinii += sudove;
            izrazhodvanPreparat = izrazhodvanPreparatChinii;
        }

        if (totalMlPreparat < 0) {
            console.log(`Not enough detergent, ${Math.abs(totalMlPreparat)} ml. more necessary!`);
            break;
        }

        broiSudove = input.shift();
        counter++
    }

    if (totalMlPreparat >= 0) {
    console.log('Detergent was enough!');
    console.log(`${broiChinii} dishes and ${broiTendjeri} pots were washed.`);
    console.log(`Leftover detergent ${Math.abs(totalMlPreparat)} ml.`);
    } 
}

solve([1,
    10,
    15,
    10,
    12,
    13,
    30
]);