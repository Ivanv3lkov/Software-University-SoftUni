function solve(input) {

    for (let i = 1; i <= 1000; i++) {
        let num = Number(i);
        if (num % 10 == 7) {
            console.log(num);
        }
    }
}
solve();