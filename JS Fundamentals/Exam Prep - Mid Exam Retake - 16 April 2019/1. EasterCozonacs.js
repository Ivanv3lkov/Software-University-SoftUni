function solve(input) {
    let budget = Number(input.shift());
    let priceFloor = Number(input.shift());
    
    let priceEggs = priceFloor * 0.75;
    let priceMilk = priceFloor * 1.25 * 0.250;

    let priceCozonac = priceFloor + priceEggs + priceMilk;

    let countOfCozonacs = 0;
    let coloredEggs = 0;

    while (budget >= priceCozonac) {
        budget -= priceCozonac;

        countOfCozonacs++;
        coloredEggs += 3;

        if (countOfCozonacs % 3 === 0) {
            let lostEggs = countOfCozonacs - 2;
            coloredEggs -= lostEggs;
        }
    }

    let moneyLeft = budget;
    console.log(`You made ${countOfCozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${moneyLeft.toFixed(2)}BGN left.`);
}

solve(['20.5', '1.25']);