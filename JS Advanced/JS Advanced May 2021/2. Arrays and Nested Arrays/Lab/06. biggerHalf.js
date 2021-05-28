function biggerHalf(arrOfNumbers) {
    let output = arrOfNumbers.sort((a, b) => a - b);

    if (arrOfNumbers.length % 2 !== 0) {
        output = output.slice(Math.ceil(arrOfNumbers.length / 2) - 1)
    } else {
        output = output.slice(arrOfNumbers.length / 2)
    }
    return output;
}

console.log(biggerHalf([19, 14, 7, 2, 19, 6]));