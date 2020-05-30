function transportPrice(input) {
    let n = Number(input.shift());
    let time = input.shift();

    let sum;

    if (n >= 100) {
        sum = n * 0.06;
    } else if (n >= 20 && n < 100) {
        sum = n * 0.09;
    } else {
        if (time == 'day') {
            sum = 0.70 + n * 0.79;
        } else {
            sum = 0.70 + n * 0.90;
        }
    }
    console.log(sum.toFixed(2));

}

transportPrice(['180', 'night']);