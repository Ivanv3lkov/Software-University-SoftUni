 function solve(input) {
    let desireProfit = Number(input.shift());
    let coctailName = input.shift();

    let sum = 0;
    let sumPrice = 0;

    while (coctailName != 'Party!') {
        let coctailCount = Number(input.shift());
        let price = (coctailName.length)
        sum = price * coctailCount;

        if (sum % 2 !== 0) {
            sum *= 0.75;
        }

        sumPrice += sum;

        if (sumPrice >= desireProfit) {
            break;
        }
    
        coctailName = input.shift();
    }


    if (coctailName == `Party!`) {
        console.log(`We need ${(desireProfit - sumPrice).toFixed(2)} leva more.`)
    } else if (sumPrice >= desireProfit) {
        console.log(`Target acquired.`)
    }
    console.log(`Club income - ${sumPrice.toFixed(2)} leva.`);
}

 solve([500,'Bellini',6,'Bamboo',7,'Party!']);