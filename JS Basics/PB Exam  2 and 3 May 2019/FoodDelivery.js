function solve(input) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veganMenuPrice = 8.15;
    const delivery = 2.50;

    let chickenMenuCount = Number(input.shift());
    let fishMenuCount = Number(input.shift());
    let veganMenuCount = Number(input.shift());

    let sum = (chickenMenuCount * chickenMenuPrice) + (fishMenuCount * fishMenuPrice) + (veganMenuCount * veganMenuPrice);

    let desert = sum * 0.20;

    let totalBill = sum + desert + delivery;

    console.log(`Total: ${totalBill.toFixed(2)}`);
}

solve([2,4,3]);