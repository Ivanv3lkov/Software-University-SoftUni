function mining(input) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let bitcoinCount = 0;
    let firstDay;
    let totalMoney = 0;

    for (let i = 1; i <= input.length; i++) {
        let goldMined = input[i - 1];

        if (i % 3 === 0) {
            goldMined *= 0.70;
            totalMoney += goldMined * goldPrice;
        } else {
            totalMoney += goldMined * goldPrice;
        }

        if (totalMoney >= bitcoinPrice) {
            if (firstDay === undefined) {
                firstDay = i;
            }
            bitcoinCount += parseInt(totalMoney / bitcoinPrice);
            totalMoney -= parseInt(totalMoney / bitcoinPrice) * bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstDay !== undefined) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

mining([100, 200, 300]);