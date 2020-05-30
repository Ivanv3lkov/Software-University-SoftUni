function solve(input) {
    let badGrades = Number(input.shift());

    let problem = input.shift();
    let grade = Number(input.shift());

    let sum = 0;
    let problemsCount = 0;
    let lastName = "";
    let badGradesCounter = 0;

    while (problem != 'Enough') {
        problemsCount++;
        sum += grade;
        lastName = problem;
        if (grade <= 4) {
            badGradesCounter++;
            if (badGradesCounter == badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }  
        }
        problem = input.shift();
        grade = Number(input.shift());
    
    }

    let average = sum / problemsCount;
    if (problem == 'Enough') {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastName}`);
    }
}

solve([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
  ]);