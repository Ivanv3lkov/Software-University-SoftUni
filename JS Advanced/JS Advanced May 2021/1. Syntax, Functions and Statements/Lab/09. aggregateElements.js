function aggregateElements(arrOfNumbers) {
    let sum = arrOfNumbers.reduce((acc, curVal) => acc + curVal, 0);
    let sumReversedNumbers = arrOfNumbers.map(n => 1 / n).reduce((acc, curVal) => acc + curVal, 0);
    let concatenatedNumbers = arrOfNumbers.join('')
    return `${sum}\n${sumReversedNumbers}\n${concatenatedNumbers}`;
}

console.log(aggregateElements([1, 2, 3]));