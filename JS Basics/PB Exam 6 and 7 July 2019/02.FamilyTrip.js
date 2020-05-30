function solve(input) {
    let budget = Number(input.shift());
    let nights = Number(input.shift());
    let nightPrice = Number(input.shift());
    let percentCosts = Number(input.shift());

    if (nights > 7) {
        nightPrice *= 0.95;
    }

    let nightsCost = nights * nightPrice;
    let additionalCosts = budget * (percentCosts / 100);
    let totalSum = nightsCost + additionalCosts;

    let diff = Math.abs(budget - totalSum);
    if (budget >= totalSum) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
solve(['800.50', '8', '100', '2']);