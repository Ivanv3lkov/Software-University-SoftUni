function camp(input) {
    let season = input.shift();
    let group = input.shift();
    let pupilsCount = Number(input.shift());
    let nightsCount = Number(input.shift());

    let price = 0;

    if (season == 'Winter') {
        if (group == 'boys' || group == 'girls') {
            price = pupilsCount * 9.60 * nightsCount;
        } else {
            price = pupilsCount * 10 * nightsCount;
        }
    } else if (season == 'Spring') {
        if (group == 'boys' || group == 'girls') {
            price = pupilsCount * 7.20 * nightsCount;
        } else {
            price = pupilsCount * 9.50 * nightsCount;
        }
    } else {
        if (group == 'boys' || group == 'girls') {
            price = pupilsCount * 15 * nightsCount;
        } else {
            price = pupilsCount * 20 * nightsCount;
        }
    }

    if (pupilsCount >= 50) {
        price *= 0.50;
    } else if (pupilsCount >= 20 && pupilsCount < 50) {
        price *= 0.85
    } else if (pupilsCount >= 10 && pupilsCount < 20) {
        price *= 0.95;
    }

    let sport;
    if (season == 'Winter') {
        if (group == 'girls') {
            sport = 'Gymnastics';
        } else if (group == 'boys') {
            sport = 'Judo';
        } else {
            sport = 'Ski';
        }
    } else if (season == 'Spring') {
        if (group == 'girls') {
            sport = 'Athletics';
        } else if (group == 'boys') {
            sport = 'Tennis';
        } else {
            sport = 'Cycling';
        }
    } else {
        if (group == 'girls') {
            sport = 'Volleyball';
        } else if (group == 'boys') {
            sport = 'Football';
        } else {
            sport = 'Swimming';
        }
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);

}

camp(['Spring', 'girls', '20', '7']);