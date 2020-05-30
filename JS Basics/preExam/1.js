function solve(input) {
    let moneyFood = Number(input.shift());
    let moneySouvenirs = Number(input.shift());
    let moneyHotel = Number(input.shift());

    let costsForHotel = moneyHotel * 0.90 + moneyHotel * 0.85 + moneyHotel * 0.80;
    let costsForSouvenirs = 3 * moneySouvenirs;
    let costsForFood = 3 * moneyFood;
    let fuel = ((420 / 100 ) * 7);
    let costsForFuel = fuel * 1.85;

    let totalMoney = costsForHotel + costsForSouvenirs + costsForFood + costsForFuel;

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}

solve([100, 50, 500]);