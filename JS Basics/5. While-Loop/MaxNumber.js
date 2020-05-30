function maxNumber(input) {
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;

    let counter = 0;

    while (counter < n) {
        let current = Number(input.shift());
        
        if (current > max) {
            max = current;
        }
        counter++;
    }
    console.log(max);

}

maxNumber(['2', '100', '99']);