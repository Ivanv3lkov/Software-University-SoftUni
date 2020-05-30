function solve(input) {
    let reservationDay = Number(input.shift());
    let reservationMonth = Number(input.shift());
    let accommodationDay = Number(input.shift());
    let accommodationMonth = Number(input.shift());
    let quitDay = Number(input.shift());
    let quitMonth = Number(input.shift());

    let sum = 0;

    let nights = quitDay - accommodationDay;

    if (accommodationDay - reservationDay >= 10 && reservationMonth < accommodationMonth) {
        sum = (nights * 25) * 0.80;
    } else if (accommodationDay - reservationDay >= 10 && reservationMonth == accommodationMonth) {
        sum = nights * 25;
    } else if (accommodationDay - reservationDay < 10 && reservationMonth < accommodationMonth) {
        sum = (nights * 25) * 0.80;
    } else if (accommodationDay - reservationDay < 10 && reservationMonth == accommodationMonth) {
        sum = nights * 30;
    }
        
    console.log(`Your stay from ${accommodationDay}/${accommodationMonth} to ${quitDay}/${quitMonth} will cost ${sum.toFixed(2)}`);
}

solve(['21', '7', '28', '8', '30', '8' ]);