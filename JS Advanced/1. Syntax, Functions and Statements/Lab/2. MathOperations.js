'use strict'
function solve(a, b, operator) {
    let obj = {
        '+': (a, b) => num1 + num2,
        '-': (a, b) => num1 - num2,
        '*': (a, b) => num1 * num2,
        '/': (a, b) => num1 / num2,
        '%': (a, b) => num1 % num2,
        '**': (a, b) => num1 ** num2
    }
    console.log(obj[operator](a, b));
}
solve(5, 6, '*');

