function solve(input) {
    let student = input.shift();
    
    let excluded = 0;
    let isExcluded = false;
    let year = 1;
    let sum = 0;

    while (year <= 12) {
        let grade = Number(input.shift());

        if (grade < 4) {
            excluded++;
            if (excluded == 2) {
                isExcluded = true;
                break;
            }
        }

        if (grade >= 4) {
            sum += grade;
            year++;
        }
    }

    if (isExcluded == false) {
        let average = sum / 12;
        console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`)
    } else {
        console.log(`${student} has been excluded at ${year} grade`)
    }

}

solve([
    'Gosho', '5', '5.5',
    '6', '5.43', '5.5',
    '6', '5.55', '5',
    '6', '6', '5.43',
    '5'
]);