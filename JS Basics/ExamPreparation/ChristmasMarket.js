function solve(input) {    
    let moneyNeeded = Number(input.shift());
    let fantasyCount = Number(input.shift());
    let horrorCount = Number(input.shift());
    let romanticCount = Number(input.shift());

    let sumFantasy = fantasyCount * 14.90;
    let sumHorror = horrorCount * 9.80;
    let sumRomantic = romanticCount * 4.30;

    let grossSum = sumFantasy + sumHorror + sumRomantic;
    let netSum = Number((grossSum * 0.80).toFixed(2));
    
    if (netSum >= moneyNeeded) {
        let diff = netSum - moneyNeeded;
        let divident = Math.floor(diff * 0.10);
        let donatedMoney = netSum - divident;
        console.log(`${donatedMoney.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${Math.trunc(divident)} leva.`);
    } else {
        console.log(`${(moneyNeeded - netSum).toFixed(2)} money needed.`);
    }
}

solve([200, 15, 10, 5]);