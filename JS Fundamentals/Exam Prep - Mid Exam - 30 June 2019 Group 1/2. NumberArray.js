function solve(input) {
    let numbers = input.shift().split(' ').map(Number);

    let command = input.shift();

    while (command !== 'End') {

        let tokens = command.split(' ');

        if (tokens[0] === 'Switch') {
            let index = Number(tokens[1]);
            switching(index);
        } else if (tokens[0] === 'Change') {
            let index = Number(tokens[1]);
            let value = Number(tokens[2]);
            change(index, value);
        } else if (tokens[1] === 'Negative') {
            sumNegative(numbers);
        } else if (tokens[1] === 'Positive') {
            sumPositive(numbers);
        } else if (tokens[1] === 'All') {
            sumAll(numbers)
        }

        command = input.shift();
    }

    let result = numbers.filter((n) => n >= 0); 
    console.log(result.join(' '));
    
    function switching(index) {
        if (index >= 0 && index < numbers.length) {
            if (numbers[index] != 0) {
                numbers[index] *= -1;
            }
        }
    }

    function change(index, value) {
        if (index >= 0 && index < numbers.length) {
            numbers[index] = value;
        }
    }

    function sumNegative(numbers) {
        let negativeNumbers = numbers.filter((n) => n < 0);
        let sumNegativeNumbers = negativeNumbers.reduce((acc, currentValue) => acc + currentValue);
        console.log(sumNegativeNumbers);
    }

    function sumPositive(numbers) {
        let postiveNumbers = numbers.filter((n) => n > 0);
        let sumPositiveNumbers = postiveNumbers.reduce((acc, currentValue) => acc + currentValue);
        console.log(sumPositiveNumbers);
    }

    function sumAll(numbers) {
        let sumAllNumbers = numbers.reduce((acc, currentValue) => acc + currentValue);
        console.log(sumAllNumbers);
    }
}

solve([
  '1 2 3 4 5 4 3 2 1 0',
  'Switch -4',
  'Change 13 0',
  'Switch 0',
  'Sum All',
  'End'
]);