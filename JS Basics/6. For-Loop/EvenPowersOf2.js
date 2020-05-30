function solve(input) {
    let n = Number(input.shift());

    for (let power = 0; power <= n; power += 2) {
        console.log(Math.pow(2, power));
    }


}
solve([3]);