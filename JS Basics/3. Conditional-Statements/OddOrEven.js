function oddOrEven(input) {
    let number = Number(input.shift());

    if (number % 2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

oddOrEven( ['20']);