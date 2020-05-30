function solve(input) {
    let budget = Number(input.shift());
    let statists = Number(input.shift());
    let clothPrice = Number(input.shift());

    let decorCost = budget * 0.10;
    let clothsCost = statists * clothPrice;

    if (statists > 150) {
        clothsCost *= 0.90;
    }

    sum = decorCost + clothsCost;

    let diff = Math.abs(sum - budget);
    
    if (sum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
solve(["20000","120","55.5"]);