function sorting(arrayOfNumbers) {
    let sortedArrayOfNumbers = arrayOfNumbers.slice(0).sort((a, b) => b - a);
    let output = [];

    while (sortedArrayOfNumbers.length > 0) {
        output.push(sortedArrayOfNumbers.shift());
        output.push(sortedArrayOfNumbers.pop());
    }
    console.log(output.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
