function solve(input) {
    let n = Number(input[0]);
    let sum = 0;


    for (let i = 1; i <= n; i++) {
    sum += Number(input[i]);
    }

    console.log(sum);
}

solve(['2','10','20']);