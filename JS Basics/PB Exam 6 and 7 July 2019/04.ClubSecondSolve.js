function solve(input) {
    let desireProfit = Number(input.shift());
    let coctailName = input.shift()

    let profit = 0;
    let orderPrice = 0;

    while (coctailName != "Party!") {
        let priceCoctail = (coctailName.length);
        let orderedCoctails = Number(input.shift());

        orderPrice = priceCoctail * orderedCoctails;

        if (orderPrice % 2 != 0) {
            orderPrice *= 0.75
        }

        profit += orderPrice;

        if (profit >= desireProfit) {
            console.log("Target acquired.");
            console.log(`Club income - ${profit.toFixed(2)} leva.`);
            break;
        }

        coctailName = input.shift();
    }

    let diff = desireProfit - profit;

    if (coctailName == "Party!") {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    }
}
solve(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);