function solve(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g

    let validPhones = [];
    let validPhone = null;

    while ((validPhone = pattern.exec(input)) !== null) {
        validPhones.push(validPhone[0]);
    }

    console.log(validPhones.join(', ')); 
}

solve([
    '+359 2 222 2222, 359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222, +359-2-222-2222'
]);
