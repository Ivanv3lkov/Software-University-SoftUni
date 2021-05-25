function sameNumbers(number) {
    let arrOfStringNumbers = number.toString().split('');
    let firstNum = Number(arrOfStringNumbers[0]);
    let allNumbersAreSame = true;
    let sumOfAllDigits = arrOfStringNumbers.reduce((a, b) => Number(a) + Number(b), 0);

    for (let el of arrOfStringNumbers) {
        if (Number(el) !== firstNum) {
            allNumbersAreSame = false;
        }
    }

    return `${allNumbersAreSame}\n${sumOfAllDigits}`
}

console.log(sameNumbers(2222222));