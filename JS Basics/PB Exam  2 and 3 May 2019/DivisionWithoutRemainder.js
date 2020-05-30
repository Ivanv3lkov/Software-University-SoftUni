function solve(input) {
    let numbersCount = Number(input.shift());

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    
    for (let i = 0; i < numbersCount; i++) {
        let num = Number(input[i]);

        if (num % 2 == 0) {
            p1++;
        } 
        
        if (num % 3 == 0) {
            p2++;
        } 
        
        if (num % 4 == 0) {
            p3++;
        }
    }

    console.log(`${((p1 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbersCount) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbersCount) * 100).toFixed(2)}%`);
}

solve([
    '10', '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65'
]);