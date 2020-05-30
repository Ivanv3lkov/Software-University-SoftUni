function solve(input) {
    let n = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber >= 200 && currentNumber < 400) {
            p2++;
        } else if (currentNumber >= 400 && currentNumber < 600) {
            p3++;
        } else if (currentNumber >= 600 && currentNumber < 800) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${(p2 / n * 100).toFixed(2)}%`);
    console.log(`${(p3 / n * 100).toFixed(2)}%`);
    console.log(`${(p4 / n * 100).toFixed(2)}%`);
    console.log(`${(p5 / n * 100).toFixed(2)}%`);
}

solve([4,53,7,56,999]);