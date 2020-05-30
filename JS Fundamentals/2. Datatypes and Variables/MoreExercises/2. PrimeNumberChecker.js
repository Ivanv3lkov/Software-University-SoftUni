function solve(number) {
    let result = '';

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result = 'false';
            break;
        } else {
            result = 'true';
        }
    }
    console.log(result);
}
solve(7);