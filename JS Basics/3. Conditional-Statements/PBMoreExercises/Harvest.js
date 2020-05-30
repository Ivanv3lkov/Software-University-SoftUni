function harvest(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let z = Number(input.shift());
    let employees = Number(input.shift());

    let totalHarvestKg = x * y;
    let partForWineKg = totalHarvestKg * 0.4;
    let totalLitersWine = partForWineKg / 2.5;
    let diff1 = Math.abs(totalLitersWine - z);
    let diff2 = diff1 / employees;

    if (totalLitersWine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(diff1)} liters wine needed.`);
    } else if (totalLitersWine >= z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalLitersWine)} liters.`);
        console.log(`${Math.ceil(diff1)} liters left -> ${Math.ceil(diff2)} liters per person.`);
    }
}

harvest(['1020','1.5','425','4']);
