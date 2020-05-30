function cinema(input) {
    let projectionType = input.shift();
    let r = Number(input.shift());
    let c = Number(input.shift());

    let totalPlaces = r * c;
    let income = 0;

    if (projectionType === 'Premiere') {
        income = totalPlaces * 12;
    } else if (projectionType === 'Normal') {
        income = totalPlaces * 7.50;
    } else {
        income = totalPlaces * 5;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(['premiere', '42','62']);