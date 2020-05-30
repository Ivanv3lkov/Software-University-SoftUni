function solve(input) {
    let days = Number(input.shift());

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let dayCounter = 0;
    let doctors = 7;

    for (let i = 0; i < days; i++) {
        dayCounter++;
        let numberPatients = Number(input[i]);

        if (dayCounter % 3 == 0 && treatedPatients < untreatedPatients) {
            doctors += 1;
            if (numberPatients >= doctors) {
                treatedPatients += doctors;
                untreatedPatients += numberPatients - doctors;
            } else {
                treatedPatients += numberPatients;
            }
        } else {
            if (numberPatients >= doctors) {
                treatedPatients += doctors;
                untreatedPatients += numberPatients - doctors;
            } else {
                treatedPatients += numberPatients;
            }
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

solve([6, 25, 25, 25, 25, 25, 2]);