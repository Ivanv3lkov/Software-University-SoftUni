function negativePositiveNumbers(arrOfNumbers) {
    let output = [];
    for (let number of arrOfNumbers) {
        if (number < 0) {
            output.unshift(number)
        } else {
            output.push(number);
        }
    }
    return output;
}

console.log(negativePositiveNumbers([3, -2, 0, -1]));