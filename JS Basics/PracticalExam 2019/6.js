function solve(input) {
    let companyNumber = Number(input.shift());

    let passengersCompany = 0;
    let company = "";
    let counter = 0;
    let avgPassengers = 0;
    let maxAvg = 0;
    let maxAvgCompany = "";
    

    for (let i = 0; i < companyNumber; i++) {
        let companyName = input.shift();
        let passengersCount = Number(input.shift());

        while (companyName != "Finish" && passengersCount != "Finish") {
            passengersCount = Number(passengersCount);

            company = companyName;
            passengersCompany += passengersCount;
            counter++;
            
            passengersCount = input.shift();
        }
        avgPassengers = Math.floor(passengersCompany / counter);

        console.log(`${company}: ${avgPassengers} passengers.`);

        if (avgPassengers > maxAvg) {
            maxAvg = avgPassengers;
            maxAvgCompany = company;
        }
        passengersCompany = 0;
        counter = 0
    }
    console.log(`${maxAvgCompany} has most passengers per flight: ${maxAvg}`);
}
solve([
    '3', 'WizzAir',
    '180', '230',
    '100', 'Finish',
    'BulgariaAir', '50',
    '60', '90',
    'Finish', 'Lufthansa',
    '260', '320',
    'Finish', ''
]);