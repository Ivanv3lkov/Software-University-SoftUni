function solve(input) {
    return input.slice(0).sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
           return a.length - b.length;
        }
    }).join('\n');
}

console.log(solve(["alpha", "beta", "gamma"]));