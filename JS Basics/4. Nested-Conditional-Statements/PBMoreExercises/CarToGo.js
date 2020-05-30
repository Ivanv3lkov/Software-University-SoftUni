function car(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    
    let carClass;
    let typeCar;


    if (budget <= 100) {
        carClass = 'Economy class';
        if (season == 'Summer') {
            typeCar = 'Cabrio';
            budget *= 0.35;
        } else {
            typeCar = 'Jeep';
            budget *= 0.65;
        }
    } else if (budget > 10 && budget <= 500) {
        carClass = 'Compact class';
        if (season == 'Summer') {
            typeCar = 'Cabrio';
            budget *= 0.45;
        } else {
            typeCar = 'Jeep';
            budget *= 0.80;
        }
    } else {
        carClass = 'Luxury class';
        typeCar = 'Jeep';
        budget *= 0.90;
    }

    console.log(carClass);
    console.log(`${typeCar} - ${budget.toFixed(2)}`);
}

car(['450', 'Summer']);