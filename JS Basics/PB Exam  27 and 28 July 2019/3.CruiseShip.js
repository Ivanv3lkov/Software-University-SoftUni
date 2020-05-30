function solve(input) {
    let cruizType = input.shift();
    let cabinType = input.shift();
    let nights = Number(input.shift());

    sum = 0;

    if (cruizType == "Mediterranean") {
        if (cabinType == "standard cabin") {
            sum = nights * 27.50 * 4;
        } else if (cabinType == "cabin with balcony") {
            sum = nights * 30.20 * 4;
        } else if (cabinType == "apartment") {
            sum = nights * 40.50 * 4;
        }
    } else if (cruizType == "Adriatic") {
        if (cabinType == "standard cabin") {
            sum = nights * 22.99 * 4;
        } else if (cabinType == "cabin with balcony") {
            sum = nights * 25.00 * 4;
        } else if (cabinType == "apartment") {
            sum = nights * 34.99 * 4;
        }
    } else if (cruizType == "Aegean") {
        if (cabinType == "standard cabin") {
            sum = nights * 23.00 * 4;
        } else if (cabinType == "cabin with balcony") {
            sum = nights * 26.60 * 4;
        } else if (cabinType == "apartment") {
            sum = nights * 39.80 * 4;
        }
    }

    if (nights > 7) {
        sum *= 0.75;
    }
    console.log(`Annie's holiday in the ${cruizType} sea costs ${sum.toFixed(2)} lv.`);
}

solve(["Aegean", "standard cabin", "10"]);