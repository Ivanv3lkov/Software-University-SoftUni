function solve(input) {
    let budget = Number(input.shift());
    let fuel = Number(input.shift());
    let day = input.shift();
    
    let sum = 2.10 * fuel + 100;

    if (day == "Saturday") {
        sum *= 0.90;
    } else {
        sum *= 0.80;
    }
    let diff = budget - sum;
    
    if (budget >= sum) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(Math.abs(diff)).toFixed(2)} lv.`);
    }
}

solve([1000, 10, "Sunday"]);