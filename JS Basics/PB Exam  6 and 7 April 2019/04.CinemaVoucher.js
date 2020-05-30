function solve(input) {
    let voucherAmount = Number(input.shift());
    let purchaseName = input.shift();

    let price = 0;
    let ticketsCount = 0;
    let purchasesCount = 0;

    while (purchaseName != "End") {
        let firstSymbol = purchaseName.charCodeAt(0);
        let secondSymbol = purchaseName.charCodeAt(1);

        if (purchaseName.length > 8) {
            price = firstSymbol + secondSymbol;

            if (voucherAmount >= price) {
                ticketsCount++;
                voucherAmount -= price;
                price = 0;
            } else {
                break;
            }
        } else if (purchaseName.length <= 8) {
            price = firstSymbol;

            if (voucherAmount >= price) {
                purchasesCount++;
                voucherAmount -= price;
                price = 0;
            } else {
                break;
            }
        }
        purchaseName = input.shift();
    }

    if (purchaseName == "End" || price > voucherAmount) {
        console.log(`${ticketsCount}`);
        console.log(`${purchasesCount}`);
    }
}

solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);