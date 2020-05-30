function solve(input) {
    let biscuitsPerDay = Number(input.shift());
    let workers = Number(input.shift());
    let biscuitsCompFactory = Number(input.shift());

    let totalAmountBiscuits = 0;

    for (let i = 1; i <= 30; i++) {
        let amountOfDailyBiscuits = biscuitsPerDay * workers;

        if (i % 3 === 0) {
            amountOfDailyBiscuits = Math.floor(amountOfDailyBiscuits * 0.75);
        }
        totalAmountBiscuits += amountOfDailyBiscuits;
    }
    console.log(`You have produced ${Math.floor(totalAmountBiscuits)} biscuits for the past month.`);

    let diff = Math.abs(totalAmountBiscuits - biscuitsCompFactory);
    let diffPercent = (diff / biscuitsCompFactory) * 100;

    if (totalAmountBiscuits > biscuitsCompFactory) {
        console.log(`You produce ${diffPercent.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${diffPercent.toFixed(2)} percent less biscuits.`);
    }
}

solve(['78', '8', '16000']);