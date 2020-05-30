function solve(input) {
    let budget = Number(input.shift());
    let bathrobe = Number(input.shift());
    let discount = Number(input.shift());

    let umbrella = bathrobe * 2 / 3;
    let flipFlops = umbrella * 0.75;
    let beachBag = (flipFlops + bathrobe) * 1 / 3;

    let sum = (bathrobe + umbrella + flipFlops + beachBag);
    sum = sum - (sum * discount / 100);

    let diff = Math.abs(budget - sum);

    if (budget >= sum) {
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She has ${diff.toFixed(2)} lv. left.`);
    } else {
    console.log(`Annie's sum is ${sum.toFixed(2)} lv. She needs ${diff.toFixed(2)} lv. more.`);
    }  
}
solve(["40", "15", "5"]);