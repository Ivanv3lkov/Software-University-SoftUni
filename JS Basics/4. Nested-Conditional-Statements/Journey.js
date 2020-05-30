function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let destination;
    let place;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            place = 'Camp';
            budget *= 0.30;
        } else {
            place = 'Hotel'
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            place = 'Camp';
            budget *= 0.40;
        } else {
            place = 'Hotel';
            budget *= 0.80;
        }
    } else {
        destination = "Europe"
        if (season == 'summer') {
            place = 'Hotel';
            budget *= 0.90;
        } else {
            place = 'Hotel'
            budget *= 0.90;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);

}
journey([1500, 'summer']);