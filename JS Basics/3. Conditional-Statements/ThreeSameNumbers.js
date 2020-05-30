function threeSameNumbers(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());

    if (num1 === num2 && num2 === num3) {
        console.log('yes')
    } else {
        console.log('no');
    }
}

threeSameNumbers(['1', '2', '1']);