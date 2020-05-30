function solve(input) {
    let contractTerm = input.shift();
    let contractType = input.shift();
    let internet = input.shift();
    let months = Number(input.shift());

    let fee = 0;

    if (contractTerm == "one") {
        if (contractType == "Small") {
            fee = 9.98;
        } else if (contractType == "Middle") {
            fee = 18.99;
        } else if (contractType == "Large") {
            fee = 25.98;
        } else if (contractType == "ExtraLarge") {
            fee = 35.99;
        }
    } else if (contractTerm == "two") {
        if (contractType == "Small") {
            fee = 8.58;
        } else if (contractType == "Middle") {
            fee = 17.09;
        } else if (contractType == "Large") {
            fee = 23.59;
        } else if (contractType == "ExtraLarge") {
            fee = 31.79;
        }
    }

    if (internet == "yes") {
        if (fee <= 10) {
            fee += 5.50;
        } else if (fee <= 30) {
            fee +=  4.35;
        } else if (fee > 30) {
            fee += 3.85;
        }
    }

    if (contractTerm == "two") {
        fee *= 0.9625
    }

    fee *= months;

    console.log(`${fee.toFixed(2)} lv.`);
}
solve(["two", "ExtraLarge", "yes", "20"]);
