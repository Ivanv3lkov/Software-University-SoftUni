function solve(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    
    let fee = 0;
    let totalSum = 0

    for (let d = 1; d <= days; d++) {
        for (let h = 1; h <= hours; h++) {
            
            if (d % 2 == 0 && h % 2 == 1) {
                fee += 2.50;
            } else if (d % 2 == 1 && h % 2 == 0) {
                fee += 1.25;
            } else {
                fee += 1;
            }
        }
        console.log(`Day: ${d} - ${fee.toFixed(2)} leva`);
        totalSum += fee;
        fee = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

solve([2,5]);