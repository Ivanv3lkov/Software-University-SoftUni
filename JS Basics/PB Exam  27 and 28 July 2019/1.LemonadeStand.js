function solve(input) {
    let lemonsKG = Number(input.shift());
    let sugarKG = Number(input.shift());
    let waterL = Number(input.shift());

    let lemonJuiceML = lemonsKG * 980;
    let totalLemonade = lemonJuiceML + waterL * 1000 + (0.3 * sugarKG);
    let soldGlasses = Math.floor(totalLemonade / 150);
    let income = soldGlasses * 1.20;

    console.log(`All cups sold: ${soldGlasses}`);
    console.log(`Money earned: ${income.toFixed(2)}`);
}
solve(["5","3.5","5"]);