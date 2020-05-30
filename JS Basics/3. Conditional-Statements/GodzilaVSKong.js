function godzilaVsKong(input) {
    let budget = Number(input.shift());
    let persons = Number(input.shift());
    let clothPrice1person = Number(input.shift());
    let decor = budget * 0.10;
    let costsForClothes = persons * clothPrice1person;
    let totalAmountForMovie = decor + costsForClothes;

    if (persons > 150) {
        costsForClothes = costsForClothes * 0.90
        totalAmountForMovie = decor + costsForClothes
    }

    let moneyNeeded;
    let moneyLeft;
    if (totalAmountForMovie > budget) {
        moneyNeeded = Math.abs(totalAmountForMovie - budget);
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else {
        moneyLeft = Math.abs(totalAmountForMovie - budget);
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}

godzilaVsKong(['9587.88', '222', '55.68']);