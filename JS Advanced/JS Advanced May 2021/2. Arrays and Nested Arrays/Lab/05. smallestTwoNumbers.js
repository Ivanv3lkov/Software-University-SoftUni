function smallestTwoNumbers(arrOfNumbers) {
    return arrOfNumbers.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));

