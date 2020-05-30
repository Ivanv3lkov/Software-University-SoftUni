function solve(input) {
    let ticketNumber = input.shift();

    let minMinutesWaiting = Number.MAX_SAFE_INTEGER;
    let ticket = "";
    let priceBGN = 0;
    let hours;
    let min;

    while (ticketNumber != "End") {
        let priceEUR = Number(input.shift());
        let minutesWaiting = Number(input.shift());

        if (minutesWaiting < minMinutesWaiting) {
            minMinutesWaiting = minutesWaiting;
            hours = Math.floor(minMinutesWaiting / 60);
            min = minMinutesWaiting % 60;
            ticket = ticketNumber;
            priceBGN = priceEUR * 1.96;
        }

        ticketNumber = input.shift();
    }

    console.log(`Ticket found for flight ${ticket} costs ${priceBGN.toFixed(2)} leva with ${hours}h ${min}m stay`);

}

solve([
    'W64301', '60',
    '140', 'FR9967',
    '80', '200',
    'FR0066', '45',
    '60', 'End'
]);