function fuelTank(input) {
    let typeFuel = input.shift();
    let fuelQuantity = Number(input.shift());
    let clubCard = input.shift();

    let sum = 0;
    if (typeFuel == 'Gasoline') {
        if (clubCard == 'Yes') {
            sum = fuelQuantity * 2.04;
        } else {
           sum = fuelQuantity * 2.22;
        }
    } else if (typeFuel == 'Diesel') {
        if (clubCard == 'Yes') {
            sum = fuelQuantity * 2.21;
        } else {
           sum = fuelQuantity * 2.33;
        }
    } else {
        if (clubCard == 'Yes') {
            sum = fuelQuantity * 0.85;
        } else {
           sum = fuelQuantity * 0.93;
        }
    }

    if (fuelQuantity >= 20 && fuelQuantity <=25) {
        sum *= 0.92;
    } else if (fuelQuantity > 25) {
        sum *= 0.90;
    }

    console.log(`${sum.toFixed(2)} lv.`);
}
fuelTank(['Diesel','19','No']);