function printResult(a, b, operator) {
    let obj = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }
    console.log(obj[operator](a, b));
}

printResult(5, 6, '+');
