function toyShop(input) {
    const puzzle = 2.60;
    const doll = 3;
    const bear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let tripPrice = Number(input.shift());
    let puzzlesQuanity = Number(input.shift());
    let dollsQuantity = Number(input.shift());
    let bearsQuantity = Number(input.shift());
    let minionsQuanity = Number(input.shift());
    let trucksQuantity = Number(input.shift());

    let sum = (puzzlesQuanity * puzzle) + (dollsQuantity * doll) + (bearsQuantity * bear ) + (minionsQuanity * minion) +(trucksQuantity * truck);
    let toys = puzzlesQuanity + dollsQuantity + bearsQuantity + minionsQuanity + trucksQuantity;

    if (toys >= 50) {
        sum = sum * 0.75;
    }
       
    sum = sum * 0.90;
    let diff = Math.abs(sum - tripPrice);

    if (sum >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    
}
toyShop(['320', '8', '2', '5', '5', '1']);



