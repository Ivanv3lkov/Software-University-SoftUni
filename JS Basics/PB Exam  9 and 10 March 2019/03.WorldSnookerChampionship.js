function worldSnookerChampionship(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let ticketCount = Number(input.shift());
    let picture = input.shift();

    let ticketsPrice = 0;

    if (stage == 'Quarter final') {
        if (ticketType == 'Standard') {
            ticketsPrice = ticketCount * 55.50;
        } else if (ticketType == 'Premium') {
            ticketsPrice = ticketCount * 105.20;
        } else {
            ticketsPrice = ticketCount * 118.90;
        }
    } else if (stage == 'Semi final') {
        if (ticketType == 'Standard') {
            ticketsPrice = ticketCount * 75.88;
        } else if (ticketType == 'Premium') {
            ticketsPrice = ticketCount * 125.22;
        } else {
            ticketsPrice = ticketCount * 300.40;
        }
    } else {
        if (ticketType == 'Standard') {
            ticketsPrice = ticketCount * 110.10;
        } else if (ticketType == 'Premium') {
            ticketsPrice = ticketCount * 160.66;
        } else {
            ticketsPrice = ticketCount * 400;
        }
    }

    if (ticketsPrice > 4000) {
        ticketsPrice = ticketsPrice * 0.75
    } else if (ticketsPrice > 2500 && ticketsPrice <= 4000) {
        ticketsPrice = ticketsPrice * 0.90;
        if (picture == 'Y') {
            ticketsPrice = ticketsPrice + ticketCount * 40;
        }
    } else {
        if (picture == 'Y') {
            ticketsPrice = ticketsPrice + ticketCount * 40;
        }
    }
        console.log(ticketsPrice.toFixed(2));
    }

    worldSnookerChampionship(["Semi final","VIP",9,"Y"]);



