function perferNum(number) {
    let sumOfNumberDivisors = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumOfNumberDivisors += i;
        }
    }

    if (number === sumOfNumberDivisors) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}

perferNum();