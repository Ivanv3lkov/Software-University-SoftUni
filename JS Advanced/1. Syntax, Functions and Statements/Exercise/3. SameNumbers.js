function solve(number) {
    let sumDigits = number.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    let arrayOfStringDigits = number.toString().split('');
    let isValid = true;

    for (let i = 1; i < arrayOfStringDigits.length; i++) {
        let firstDigit = arrayOfStringDigits[0];

        if (firstDigit !== arrayOfStringDigits[i]) {
            isValid = false;
            break;
        };
    };
    console.log(isValid);
    console.log(sumDigits);
};

solve(2222222);
