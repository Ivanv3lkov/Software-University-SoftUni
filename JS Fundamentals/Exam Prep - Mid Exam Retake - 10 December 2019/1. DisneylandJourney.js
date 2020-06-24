function solve(input) {
    let journeyMoney = Number(input.shift());
    let months = Number(input.shift());
    let monthlySavedMoney = 0;
    let collectedMoney = 0;

    for (let i = 1; i <= months; i++) {

        if (i % 2 !== 0 && i !== 1) {
            collectedMoney *= 0.84;
        }

        if (i % 4 === 0) {
            collectedMoney *= 1.25;
        }

        monthlySavedMoney = journeyMoney * 0.25;

        collectedMoney += monthlySavedMoney;
    }

    let diff = Math.abs(collectedMoney - journeyMoney);
    if (collectedMoney >= journeyMoney) {
        console.log(`Bravo! You can go to Disneyland and you will have ${diff.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${diff.toFixed(2)}lv. more.`); 
    }
}

solve(['3265', '3']);