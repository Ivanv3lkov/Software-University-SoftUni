function sumOfNumbers(n, m) {
    let startIndex = Number(n);
    let endIndex = Number(m);
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += i
    }

   return sum;
}

console.log(sumOfNumbers('-8', '20'));