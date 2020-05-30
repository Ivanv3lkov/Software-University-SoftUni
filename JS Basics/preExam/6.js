function solve(input) {
    let num = input.shift();
    
    let digit1 = Number(num[0]);
    let digit2  = Number(num[1]);
    let digit3 = Number(num[2]);

    for (let i = 1; i <= digit3; i++) {
        for (let j = 1; j <= digit2; j++) {
            for (let k = 1; k <= digit1; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

solve(["324"]);