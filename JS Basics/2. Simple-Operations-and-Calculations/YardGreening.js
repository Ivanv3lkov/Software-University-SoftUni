function yardGreening(input) {
    let squareMeters = Number(input.shift());
    let price = 7.61;
    let discount = 18/100;
    let priceWithoutDiscount = price * squareMeters;
    let sumOfDiscount = priceWithoutDiscount * discount;
    let priceNet = priceWithoutDiscount - sumOfDiscount;
   
    console.log(`The final price is: ${priceNet.toFixed(2)} lv. `);
    console.log(`The discount is: ${sumOfDiscount.toFixed(2)} lv. `);
}

yardGreening( ["540"]);