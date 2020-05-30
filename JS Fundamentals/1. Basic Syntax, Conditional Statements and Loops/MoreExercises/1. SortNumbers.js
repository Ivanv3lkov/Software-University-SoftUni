function sortNumbers(a, b, c) {

    let numbers = [a, b, c];

    console.log(numbers.sort((a, b) => b - a).join('\n'));
}

sortNumbers(2, 1, 3)