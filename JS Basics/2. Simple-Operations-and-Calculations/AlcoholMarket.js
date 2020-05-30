function alcoholMarket(input) {
    let whiskeyPrice = Number(input.shift());
    let beerQuantity = Number(input.shift());
    let wineQuantity = Number(input.shift());
    let rakiaQuantity = Number(input.shift());
    let whiskeyQuantity = Number(input.shift());

    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - ( 0.4 * rakiaPrice );
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);

    let whiskeyBill = whiskeyQuantity * whiskeyPrice;
    let rakiaBill = rakiaQuantity * rakiaPrice;
    let wineBill = wineQuantity * winePrice;
    let beerBill = beerQuantity * beerPrice;

    let totalBill = (whiskeyBill + rakiaBill + wineBill + beerBill);
    console.log(totalBill.toFixed(2));
}

alcoholMarket(['63.44', '3.57', '6.35', ' 8.15', '2.5']);