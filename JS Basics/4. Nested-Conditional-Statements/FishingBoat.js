function fishingBoat(input) {
    let budged = Number(input.shift());
    let season = input.shift();
    let countFishermen = Number(input.shift());

    let price;

    if (season === 'Spring') {
        if (countFishermen <= 6) {
            price = 3000 * 0.90;
        } else if (countFishermen > 6 && countFishermen <= 11) {
            price = 3000 * 0.85;
        } else {
            price = 3000 * 0.75;
        }
    } else if (season === 'Summer' || season === 'Autumn') {
        if (countFishermen <= 6) {
            price = 4200 * 0.90;
        } else if (countFishermen > 6 && countFishermen <= 11) {
            price = 4200 * 0.85;
        } else {
            price = 4200 * 0.75;
        }
    } else {
        if (countFishermen <= 6) {
            price = 2600 * 0.90;
        } else if (countFishermen > 6 && countFishermen <= 11) {
            price = 2600 * 0.85;
        } else {
            price = 2600 * 0.75;
        }
    }

    if (season !== 'Autumn' && countFishermen % 2 == 0) {
        price *= 0.95;
    }  

    let diff = Math.abs(price - budged);
    
    if (price <= budged) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

fishingBoat(['3000', 'Summer', 11]);