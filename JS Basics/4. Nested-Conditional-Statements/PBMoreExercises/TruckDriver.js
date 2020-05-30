function truckDriver(input) {
    let season = input.shift();
    let monthlyKM = Number(input.shift());

    let income = 0;

    if (monthlyKM > 10000 && monthlyKM <= 20000) {
        income = monthlyKM * 1.45;
    } else if (monthlyKM > 5000 && monthlyKM <= 10000) {
        if (season == 'Spring' || season == 'Autumn') {
            income = monthlyKM * 0.95;
        } else if (season == 'Summer') {
            income = monthlyKM * 1.10;
        } else {
            income = monthlyKM * 1.25;
        }
    } else {
        if (season == 'Spring' || season == 'Autumn') {
            income = monthlyKM * 0.75;
        } else if (season == 'Summer') {
            income = monthlyKM * 0.90;
        } else {
            income = monthlyKM * 1.05;
        }
    }

    let profit;
    profit = income * 0.90 * 4;

    console.log(profit.toFixed(2));
}

truckDriver(['Summer', '3455']);