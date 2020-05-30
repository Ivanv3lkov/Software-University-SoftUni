function solve(input) {
    let months = Number(input.shift());

    let water = 20;
    let internet = 15;
    let otherCosts = 0;

    let electricityBill = 0;
    let waterBill = 0;
    let internetBill = 0;
    let other = 0;

    for (i = 0; i < months; i++) {
        let electricity = Number(input.shift());

        otherCosts = (electricity + water + internet) + (electricity + water + internet) * 0.20;

        electricityBill += electricity;
        waterBill += 20;
        internetBill += 15;
        other += otherCosts
    }
    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${((electricityBill + waterBill + internetBill + other) / months).toFixed(2)} lv`);  
}

solve(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
