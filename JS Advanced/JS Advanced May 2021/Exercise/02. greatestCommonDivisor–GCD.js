function getTheGeatestCommonDivisor(a, b) {
    let small = Math.min(a, b);
    let gcd = 1;

    for (let i = 1; i <= small; i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }

    return gcd;
}

console.log(getTheGeatestCommonDivisor(15, 5));