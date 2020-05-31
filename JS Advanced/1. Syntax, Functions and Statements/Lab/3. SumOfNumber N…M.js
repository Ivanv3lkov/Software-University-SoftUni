function solve(num1, num2) {
    let result = 0;
    let start = Number(num1);
    let end = Number(num2);

    for (let i = start; i <= end; i++) {
        result += i;
    }

  return result;
}

console.log(solve(-8, 20));
