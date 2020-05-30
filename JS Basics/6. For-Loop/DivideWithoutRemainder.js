function solve(input) {
    let n = Number(input[0]);
    
    p1 = 0;
    p2 = 0;
    p3 = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);

        if (number % 2 == 0) {
            p1++;
        }
        if (number % 3 == 0) {
            p2++;
        }
        if (number % 4 === 0) {
            p3++;
        }
    }
    let percent1 = p1 / n * 100;
    let percent2 = p2 / n * 100;
    let percent3 = p3 / n * 100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
}

solve([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);