function minNumber(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;

    let counter = 0;

    while (counter < n) {
        let current = Number(input.shift());

        if (current < min) {
            min = current;
        }
        counter++;
    }
    console.log(min);
}

minNumber(['3', '-10', '20', '-30']);