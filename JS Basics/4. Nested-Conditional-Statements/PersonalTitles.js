function gender(input) {
    let age = Number(input.shift());
    let gender = input.shift();

    if (gender == 'f') {
        if (age >= 16) {
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    } else {
        if (age >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }
} 


gender(['12', 'f']);