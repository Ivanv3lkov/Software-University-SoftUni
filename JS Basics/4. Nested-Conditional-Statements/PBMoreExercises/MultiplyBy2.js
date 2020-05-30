function solve(input) {
    let number = Number(input.shift());

    let result = 0;
    

    while (number >= 0) {
        result = number * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        number = Number(input.shift());
    }

    if (number < 0) {
        console.log('Negative number!');
    }
}
solve([ '23.43', '12.3245', '0', '65.23432', '23', '65', '-12' ]);
