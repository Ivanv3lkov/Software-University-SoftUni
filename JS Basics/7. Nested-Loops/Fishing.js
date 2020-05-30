function solve(input) {
    let quota = Number(input.shift());

    let fishCount = 0;
    let profit = 0;
    let sumAscii = 0;
    let fishPrice = 0;

    let fishName = input.shift();

    while (fishName != "Stop") {
        let fishKg = Number(input.shift());
        fishCount++;

        for (let i = 0; i < fishName.length; i++) {
          sumAscii += fishName.charCodeAt(i);
        }

        fishPrice = sumAscii / fishKg;

        if (fishCount % 3 === 0) {
            profit += fishPrice;
        } else {
            profit -= fishPrice;
        }

        if (fishCount === quota) {
            console.log("Lyubo fulfilled the quota!");
            break;
        }
        sumAscii = 0;
        fishName = input.shift();
    }

    if (profit >= 0) {
        console.log(`Lyubo's profit from ${fishCount} fishes is ${(Math.abs(profit)).toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${(Math.abs(profit)).toFixed(2)} leva today.`);
    }

}

solve(['3', 'catfish', '70', 'carp', '20', 'tench', '14']);