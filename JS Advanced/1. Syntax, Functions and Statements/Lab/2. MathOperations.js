'use strict'
function solve(a, b, operator) {
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
solve(5, 6, '*');

