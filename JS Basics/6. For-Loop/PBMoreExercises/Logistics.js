function solve(input) {
    let freightCount = Number(input.shift());

    let moneyFromBus = 0;
    let moneyFromTruck = 0;
    let moneyFromTrain = 0;
    let totalFreight = 0;
    let tonesBus = 0;
    let tonesTruck = 0;
    let tonesTrain = 0;

    for (let i = 0; i < freightCount; i++) {
        let tones = Number(input.shift());
        totalFreight += tones;
        
        if (tones <= 3) {
            moneyFromBus += tones * 200;
            tonesBus += tones;
        } else if (tones >= 4 && tones <= 11) {
            moneyFromTruck += tones * 175;
            tonesTruck += tones;
        } else {
            moneyFromTrain += tones * 120;
            tonesTrain += tones;
        }
    }
    let avgPriceTone = (moneyFromBus + moneyFromTruck + moneyFromTrain) / totalFreight;
    let avgTonesBus = (tonesBus / totalFreight) * 100;
    let avgTonesTruck = (tonesTruck / totalFreight) * 100;
    let avgTonesTrain = (tonesTrain / totalFreight) * 100;

    console.log(avgPriceTone.toFixed(2));
    console.log(`${avgTonesBus.toFixed(2)}%`);
    console.log(`${avgTonesTruck.toFixed(2)}%`);
    console.log(`${avgTonesTrain.toFixed(2)}%`);
}

solve([4, 1, 5, 16, 3]);