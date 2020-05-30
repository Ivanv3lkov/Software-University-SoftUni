function solve(input) {
    let money = Number(input[0]);
    let year = Number(input[1]);
    let yearCounter = 18;

    for (let i = 1800; i <= year; i++) {
        
        if (i % 2 == 0) {
            money -= 12000;
        } else {
            money -= 12000 + (50 * yearCounter);
        }
        yearCounter++;
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${Math.abs(money).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}

solve([100000.15, 1808]);