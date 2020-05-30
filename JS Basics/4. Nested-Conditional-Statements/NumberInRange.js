function numberInRange(input) {
    let number = Number(input.shift());

    if (number >= -100 && number <= 100 && number !== 0) {
        console.group('Yes');
    } else {
        console.log('No');
    }
}

numberInRange(['100']);