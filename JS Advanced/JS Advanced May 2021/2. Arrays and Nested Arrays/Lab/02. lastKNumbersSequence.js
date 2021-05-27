function solve(n, k) {
    let result = [1];

    while (result.length !== n) {
        if (result.length < k) {
            result.push(result.reduce((a, b) => a + b));
        } else {
            let lastThreeEl = result.slice(-k);
            result.push(lastThreeEl.reduce((a, b) => a + b));
        }
    }
    return result;
}

console.log(solve(6, 3));