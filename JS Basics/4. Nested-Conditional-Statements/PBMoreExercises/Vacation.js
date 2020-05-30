function vacation(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    let accomodation;
    let location;
    let sum = 0;

    if (budget <= 1000) {
        accomodation = 'Camp';
        if (season == 'Summer') {
            location = 'Alaska'
            sum = budget * 0.65;
        } else {
            location = 'Morocco';
            sum = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        accomodation = 'Hut';
        if (season == 'Summer') {
            location = 'Alaska';
            sum = budget * 0.80;
        } else {
            location = 'Morocco'
            sum = budget * 0.60;
        }
    } else {
        accomodation = 'Hotel';
        sum = budget * 0.90;
        if (season == 'Summer') {
            location = 'Alaska';
        } else {
            location = 'Morocco'
        }
    }
    console.log(`${location} - ${accomodation} - ${sum.toFixed(2)}`);
}

vacation(['799.50','Winter']);