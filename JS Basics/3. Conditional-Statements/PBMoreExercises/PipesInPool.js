function pipes(input) {
    let v = Number(input.shift()); 
    let p1 = Number(input.shift());
    let p2 = Number(input.shift()); 
    let h = Number(input.shift()); 

    let pipe1 = p1 * h;
    let pipe2 = p2 * h
    sum = pipe1 + pipe2;
    let poolPercent;
    let pipe1Percent;
    let pipe2Percent;
    let diff;

    if(sum <= v) {
        poolPercent = (sum / v) * 100;
        pipe1Percent = (pipe1 / sum) * 100;
        pipe2Percent = (pipe2 / sum) * 100;
        console.log(`The pool is ${poolPercent}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
    } else {
        diff = Math.abs(sum - v);
        console.log(`For ${h} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}

pipes(['100','100','100','2.5']);
