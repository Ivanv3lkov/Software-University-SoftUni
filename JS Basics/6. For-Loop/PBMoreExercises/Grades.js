function solve(input) {
    let students = Number(input.shift());

    let topStudents = 0;
    let between4and5 = 0;
    let between3and4 = 0;
    let fail = 0;
    let sumGrades = 0;


    for (let i = 0; i < students; i++) {
        let grade = Number(input.shift());
        sumGrades += grade;

        if (grade >= 2 && grade < 3) {
            fail++;
        } else if (grade >= 3 && grade < 4) {
            between3and4++;
        } else if (grade >= 4 && grade < 5) {
            between4and5++;
        } else {
            topStudents++;
        }  
    }

    console.log(`Top students: ${((topStudents / students) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4and5 / students) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3and4 / students) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / students) * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumGrades / students).toFixed(2)}`);
}

solve([
    '10', '3', '2.99',
    '5.68', '3.01', '4',
    '4', '6', '4.5',
    '2.44', '5', ''
]);