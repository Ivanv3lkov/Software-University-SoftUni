function solve(input) {
    let drink = input.shift();
    let sugar = input.shift();
    let drinksCount = Number(input.shift());

    let price = 0;

    if (drink == "Espresso") {
        if (sugar == "Without") {
            price = drinksCount * 0.90;
        } else if (sugar == "Normal") {
            price = drinksCount * 1.00;
        } else if (sugar == "Extra") {
            price = drinksCount * 1.20;
        }
    } else if (drink == "Cappuccino") {
        if (sugar == "Without") {
            price = drinksCount * 1.00;
        } else if (sugar == "Normal") {
            price = drinksCount * 1.20;
        } else if (sugar == "Extra") {
            price = drinksCount * 1.60;
        }
    } else if (drink == "Tea") {
        if (sugar == "Without") {
            price = drinksCount * 0.50;
        } else if (sugar == "Normal") {
            price = drinksCount * 0.60;
        } else if (sugar == "Extra") {
            price = drinksCount * 0.70;
        }
    }

    if (sugar == "Without") {
        price *= 0.65;
    }

    if (drink == "Espresso" && drinksCount >= 5) {
        price *= 0.75;
    }

    if (price > 15) {
        price *= 0.80;
    }
    console.log(`You bought ${drinksCount} cups of ${drink} for ${price.toFixed(2)} lv.`);
}

solve(['Espresso', 'Without', '10']);