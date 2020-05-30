function hotelRoom(input) {
    let month = input.shift();
    let nights = Number(input.shift());
    let studioSum;
    let apartmentSum;


    if (month == 'May' || month == 'October') {
        studioSum = nights * 50;
        apartmentSum = nights * 65;
        if (nights > 7 && nights <= 14) {
            studioSum *= 0.95;
        } else if (nights > 14) {
            studioSum *= 0.70;
        }
    } else if (month == 'June' || month == 'September') {
        studioSum = nights * 75.20;
        apartmentSum = nights * 68.70;
        if (nights > 14) {
            studioSum *= 0.80;
        }
    } else if (month == 'July' || month == 'August') {
        studioSum = nights * 76;
        apartmentSum = nights * 77;
    }
    
    if (nights > 14) {
        apartmentSum *= 0.90;
    }

    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}



hotelRoom(['June', '14']);