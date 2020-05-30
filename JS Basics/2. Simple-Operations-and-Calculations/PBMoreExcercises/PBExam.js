function foodDelivery(input) {
    const chickenMenuPrice = 10.35;
    const fishMenuPrice = 12.40;
    const veganMenuPrice = 8.15;
    const costsForDelivery = 2.50;

    let chickenQuantity = Number(input.shift());
    let fishQuantity = Number(input.shift());
    let veganQuantity = Number(input.shift());

    sumFromMenu = (chickenQuantity * chickenMenuPrice) + (fishQuantity * fishMenuPrice) + (veganQuantity * veganMenuPrice);
    let dessert = sumFromMenu * 0.20;
    let totalBill = sumFromMenu + dessert + costsForDelivery;

    console.log(`Total: ${totalBill.toFixed(2)}`);
}

foodDelivery(['0', '0', '0']);