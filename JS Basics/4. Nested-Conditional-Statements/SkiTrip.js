function skiTrip(input) {
    days = Number(input.shift());
    roomType = input.shift();
    grade = input.shift();

    let nights = days - 1;
    let costs;

    if (roomType == 'room for one person') {
        costs = nights * 18;
    } else if (roomType == 'apartment') {
        if (days < 10) {
            costs = nights * 25 * 0.70;
        } else if (days >= 10 && days <= 15) {
            costs = nights * 25 * 0.65;
        } else {
            costs = nights * 25 * 0.5;
        }
    } else {
        if (days < 10) {
            costs = nights * 35 * 0.9;
        } else if (days >= 10 && days <= 15) {
            costs = nights * 35 * 0.85;
        } else {
            costs = nights * 35 * 0.80;
        }
    }

    if (grade == 'positive') {
        costs = costs + (costs * 0.25);
    } else {
        costs = costs - (costs * 0.10);
    }
    console.log(costs.toFixed(2));
}

skiTrip(['2', 'apartment', 'positive']);

