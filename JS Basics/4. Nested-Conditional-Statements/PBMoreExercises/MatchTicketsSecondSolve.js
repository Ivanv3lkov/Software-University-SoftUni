function matchTickets(input) {
    const vipTicketPrice = 499.99;
    const normalTicketPrice = 249.99;

    let budget = Number(input.shift());
    let category = input.shift();
    let peopleCount = Number(input.shift());

    let sum = 0;

    switch (category) {
        case 'VIP': {
            sum = peopleCount * vipTicketPrice;
            if (peopleCount >= 1 && peopleCount <= 4) {
                budget *= 0.25;
            } else if (peopleCount >= 5 && peopleCount <= 9) {
                budget *= 0.40;
            } else if (peopleCount >= 10 && peopleCount <= 24) {
                budget *= 0.50;
            } else if (peopleCount >= 25 && peopleCount <= 49) {
                budget *= 0.60;
            } else {
                budget *= 0.75;
            }; break;
        } case 'Normal': {
            sum = peopleCount * normalTicketPrice;
            if (peopleCount >= 1 && peopleCount <= 4) {
                budget *= 0.25;
            } else if (peopleCount >= 5 && peopleCount <= 9) {
                budget *= 0.40;
            } else if (peopleCount >= 10 && peopleCount <= 24) {
                budget *= 0.50;
            } else if (peopleCount >= 25 && peopleCount <= 49) {
                budget *= 0.60;
            } else {
                budget *= 0.75;
            }; break;
        }
    }
    let diff = Math.abs(sum - budget);

    if (sum <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets(['30000','VIP','49']);