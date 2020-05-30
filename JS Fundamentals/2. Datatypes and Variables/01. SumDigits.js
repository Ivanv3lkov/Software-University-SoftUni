function solve(number) {
    let numberToString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }

    console.log(sum); 
}

solve(97561)