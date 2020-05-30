function solve(input) {
    let judges = input.shift();
    let presentation = input.shift()

    let allGrades = 0;
    let gradesCount = 0;
  
    while (presentation != "Finish") {
        let gradePerPres = 0;

        for (i = 1; i <= judges; i++) {
            let grade = Number(input.shift());
            gradesCount++;
            gradePerPres += grade;
            allGrades += grade;       
        }
        console.log(`${presentation} - ${(gradePerPres / judges).toFixed(2)}.`);
        presentation = input.shift();
    }

    console.log(`Student's final assessment is ${(allGrades / gradesCount).toFixed(2)}.`);
}

solve([
    '2', 'While-Loop',
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish',
]);