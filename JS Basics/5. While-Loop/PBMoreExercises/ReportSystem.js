function solve(input) {
    let charity = Number(input.shift()); // желана сума
    let entry = input.shift();

    let cash = 0;
    let card = 0;
    let counter = 0;
    let amountCollected = 0;
    let cashCounter = 0;
    let cardCounter = 0;
    let cashCounterPeople = 0;
    let cardCounterPeople = 0;

    while (entry != 'End') {
        let priceItems = Number(entry);

        counter++;

        if (counter % 2 == 0) {
            card = priceItems;
            if (card < 10) {
                console.log('Error in transaction!');
            } else {
                amountCollected += card;
                cardCounter += card;
                cardCounterPeople++;
                console.log('Product sold!');
            }
        } else {
            cash = priceItems;
            if (cash > 100) {
                console.log('Error in transaction!');
            } else {
                amountCollected += cash;
                cashCounter += cash;
                cashCounterPeople++;
                console.log('Product sold!');
            }

        }
        if (amountCollected >= charity) {
            console.log(`Average CS: ${(cashCounter / cashCounterPeople).toFixed(2)}`);
            console.log(`Average CC: ${(cardCounter / cardCounterPeople).toFixed(2)}`);
            break;
        }
        entry = input.shift();
    }

    if (entry == 'End') {
        console.log('Failed to collect required money for charity.');
    }
}

    solve(['600', '86', '150', '98', '227', 'End']);