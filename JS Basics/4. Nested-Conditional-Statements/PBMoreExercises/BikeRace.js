function bikeRace(input) {
    let juniorsCount = Number(input.shift());
    let seniorsCount = Number(input.shift());
    let traceType = input.shift();

    let tax = 0;
    let totalParticipants = juniorsCount + seniorsCount;

    if (traceType == 'trail') {
        tax = (juniorsCount * 5.50) + (seniorsCount * 7);
        tax *= 0.95;
    } else if (traceType == 'cross-country') {
        if (totalParticipants >= 50) {
            tax = (juniorsCount * 8) + (seniorsCount * 9.5);
            tax *= 0.75;
            tax *= 0.95;
        } else {
            tax = (juniorsCount * 8) + (seniorsCount * 9.5);
            tax *= 0.95;
        }
    } else if (traceType == 'downhill') {
        tax = (juniorsCount * 12.25) + (seniorsCount * 13.75);
        tax *= 0.95;
    } else {
        tax = (juniorsCount * 20) + (seniorsCount * 21.5);
        tax *= 0.95;
    }
    console.log(tax.toFixed(2));
}

bikeRace(['10', '20', 'trail']);