function solve(startingYield) {
    let extractedYield = 0;
    let consumption = 26; 
    let dayCounter = 0;
    let yieldDrop = 10;
   
    while (startingYield >= 100) {
        dayCounter++;
        extractedYield += startingYield - consumption;

        startingYield -= yieldDrop;
    }

    if (extractedYield >= 26) {
    extractedYield -= consumption;
    }

    console.log(dayCounter);
    console.log(extractedYield);
}

solve(100);