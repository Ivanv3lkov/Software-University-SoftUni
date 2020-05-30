function solve(input) {
    let boxesCount = Number(input.shift());
    let rolkiCount = Number(input.shift());
    let glovesPrice = Number(input.shift());
    let chetkaPrice = Number(input.shift());

    let glovesCount = Math.ceil(0.35 * rolkiCount);
    let chetkaCount = Math.floor(0.48 * boxesCount);

    let sumGloves = glovesCount * glovesPrice;
    let sumChetki = chetkaCount * chetkaPrice;
    let sumBox = boxesCount * 21.50;
    let sumRolki = rolkiCount * 5.20;

    let totalSum = sumGloves + sumChetki + sumBox + sumRolki;

    let deliveryCosts = totalSum * (1 / 15);

    console.log(`This delivery will cost ${deliveryCosts.toFixed(2)} lv.`);
}  

solve(['10', '8', '2.2', '5']);