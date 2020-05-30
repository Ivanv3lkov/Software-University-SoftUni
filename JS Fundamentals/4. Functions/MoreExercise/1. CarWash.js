function carWash(input) {
    
    let carClean = 0

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];

        if (currentCommand === 'soap') {
            cleanWithSoap();
        } else if (currentCommand === 'water') {
            cleanWithWater();
        } else if (currentCommand === 'vacuum cleaner') {
            cleanWithVacuumCleaner();
        } else {
            mud();
        }
    }

    function cleanWithSoap() {
        return carClean += 10;
    }

    function cleanWithWater() {
        return carClean *= 1.20;
    }

    function cleanWithVacuumCleaner() {
        return carClean *= 1.25;
    }

    function mud() {
        return carClean *= 0.90;
    }

    console.log(`The car is ${carClean.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);