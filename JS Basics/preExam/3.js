function solve(input) {
    let sushiKind = input.shift();
    let restaurant = input.shift();
    let portionCount = Number(input.shift());
    let order = input.shift();

    let sum = 0;
    let isInvalid = false;

    if (restaurant == "Sushi Zone") {
        if (sushiKind == "sashimi") {
            sum = portionCount * 4.99;
        } else if (sushiKind == "maki") {
            sum = portionCount * 5.29;
        } else if (sushiKind == "uramaki") {
            sum = portionCount * 5.99;
        } else {
            sum = portionCount * 4.29;
        }
    } else if (restaurant == "Sushi Time") {
        if (sushiKind == "sashimi") {
            sum = portionCount * 5.49;
        } else if (sushiKind == "maki") {
            sum = portionCount * 4.69;
        } else if (sushiKind == "uramaki") {
            sum = portionCount * 4.49;
        } else {
            sum = portionCount * 5.19;
        }
    } else if (restaurant == "Sushi Bar") {
        if (sushiKind == "sashimi") {
            sum = portionCount * 5.25;
        } else if (sushiKind == "maki") {
            sum = portionCount * 5.55;
        } else if (sushiKind == "uramaki") {
            sum = portionCount * 6.25;
        } else {
            sum = portionCount * 4.75;
        }
    } else if (restaurant == "Asian Pub") {
        if (sushiKind == "sashimi") {
            sum = portionCount * 4.50;
        } else if (sushiKind == "maki") {
            sum = portionCount * 4.80;
        } else if (sushiKind == "uramaki") {
            sum = portionCount * 5.50;
        } else {
            sum = portionCount * 5.50;
        }
    } else {
        isInvalid = true;
    }

    if (order == "Y") {
        sum = sum + sum * 0.20;
    }

    if (isInvalid) {
        console.log(`${restaurant} is invalid restaurant!`);
    } else {
        console.log(`Total price: ${Math.ceil(sum)} lv.`);
    }
}

solve(["maki", "Sushi Zone", 4, "Y"]);