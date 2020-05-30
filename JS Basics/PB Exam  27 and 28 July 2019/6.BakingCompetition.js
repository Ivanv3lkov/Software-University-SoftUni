function solve(input) {
    let competitors = Number(input.shift());

    let totalCakes = 0;
    let cookiesPrice = 0;
    let cakesPrice = 0;
    let wafflesPrice = 0;

    let sum = 0;

    for (let i = 1; i <= competitors; i++) {
        let nameCompetitors = input.shift();
        let cakeKind = input.shift();
        let currentSweetsCounter = Number(input.shift());

        let cookies = 0;
        let cakes = 0;
        let waffles = 0;

        while (true) {
            if (cakeKind == "Stop baking!") {
                console.log(`${nameCompetitors} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
                break;
            }

            totalCakes += currentSweetsCounter;

            if (cakeKind == "cookies") {
                cookies += currentSweetsCounter;
                cookiesPrice += currentSweetsCounter * 1.50;
            } else if (cakeKind == "cakes") {
                cakes += currentSweetsCounter;
                cakesPrice += currentSweetsCounter * 7.80;
            } else if (cakeKind == "waffles") {
                waffles += currentSweetsCounter;
                wafflesPrice += currentSweetsCounter * 2.30;
            }

                cakeKind = input.shift();

            if (cakeKind != "Stop baking!") {
                currentSweetsCounter = Number(input.shift());
            }
        }
    }

    sum = cookiesPrice + cakesPrice + wafflesPrice;

    console.log(`All bakery sold: ${totalCakes}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);
}
solve([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
]);