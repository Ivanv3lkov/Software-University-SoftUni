function solve(input) {
    let ageLily = Number(input.shift());
    let washingMachinePrice = Number(input.shift());
    let priceToy = Number(input.shift());

    let toyCount = 0;
    let countMoney = 0;
    let money = 0;
    let moneyGift = 0;
    

    for (let i = 1; i <= ageLily; i++) {

        if (i % 2 !== 0) {
            toyCount += 1;
        } else {
            money = i * 5;
            moneyGift += money;
            countMoney++
        }
    }

    let toyMoney = toyCount * priceToy;
    let totalMoney = (moneyGift + toyMoney) - countMoney;

    let diff = Math.abs(totalMoney - washingMachinePrice)

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

solve([21, 1570.98, 3]);