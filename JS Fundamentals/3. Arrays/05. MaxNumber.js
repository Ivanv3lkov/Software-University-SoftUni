function solve(array) {
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let isTopInteger = true;

        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (currentEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            topIntegers.push(currentEl);
        }
    }

    console.log(topIntegers.join(' '));
}

solve([1, 4, 3, 2]);