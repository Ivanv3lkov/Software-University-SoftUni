function solve(input) {
    let whiteBreadPrice = Number(input.shift());
    let whiteBreadCount = Number(input.shift());
    let grainBreadCount = Number(input.shift());
    let gevreciCount = Number(input.shift());
    let kroasaniCount = Number(input.shift());
    let day = input.shift(); // praznik ili ne
    let cakeCount = Number(input.shift());
    let ponichkiCount = Number(input.shift());

    let grainBreadPrice = whiteBreadPrice + whiteBreadPrice * 0.20;
    let gevrekPrice = grainBreadPrice - grainBreadPrice * 0.20;
    let kroasanPrice = gevrekPrice + 1.50;
    let cakePrice = whiteBreadPrice * 0.80;
    let ponichkaPrice = cakePrice * 0.45;

    let sum = 0;

    if (day == "yes") {
        sum = (whiteBreadPrice * whiteBreadCount) + (grainBreadPrice * grainBreadCount) + (gevreciCount * gevrekPrice) + (kroasanPrice * kroasaniCount) + (cakePrice * cakeCount) + (ponichkaPrice * ponichkiCount);
        console.log(`Happy holidays! This will cost you ${sum.toFixed(2)} lv.`);
    } else {
        sum = (whiteBreadPrice * whiteBreadCount) + (grainBreadPrice * grainBreadCount) + (gevreciCount * gevrekPrice) + (kroasanPrice * kroasaniCount);
        console.log(`The value of you order is ${sum.toFixed(2)} lv.`);
    }
}

solve([
    '1', '2', '1',
    '4', '5', 'yes',
    '7', '12'
]);