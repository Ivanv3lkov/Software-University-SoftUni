function operation(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();

    let result = 0;

    if (operator == '+' ) {
        result = n1 + n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator == '-') {
        result = n1 - n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator == '*') {
        result = n1 * n2;
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
    } else if (operator == '/') {
        result = n1 / n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`)
        } 
    } else if (operator == "%") {
        result = n1 % n2;
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`)
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
    } 
}

operation(['112', '0', '/']);