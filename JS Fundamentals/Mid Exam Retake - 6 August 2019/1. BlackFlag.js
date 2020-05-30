function solve(input) {
    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;

    for (let day = 1; day <= days; day++) {
        totalPlunder += dailyPlunder;

        if (day % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;
        }

        if (day % 5 === 0) {
            totalPlunder *= 0.70;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve(['10', '20', '380']);