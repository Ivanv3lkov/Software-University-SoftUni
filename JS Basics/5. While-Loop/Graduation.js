function graduation(input) {
    let student = input.shift();

    let year = 1;
    let sum = 0;
    

    while (year <= 12) {
        let grade = Number(input.shift());
        
        if (grade >= 4) {
            sum += grade;
            year++;
        }
    }

    let average = sum / 12;
    console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
}

graduation(['Pesho', '4', '5.5','6', '5.43', '4.5','6', '5.55', '5','6','6','5.43','5','6']);