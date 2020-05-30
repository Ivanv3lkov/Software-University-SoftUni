function solve(input) {
    let countOfStudents = Number(input.shift());
    let countOfLectures = Number(input.shift());
    let additionalBonus = Number(input.shift());
    
    let maxBonusPoints = 0;
    let maxAttendances = 0;

    for (let i = 1; i <= countOfStudents; i++) {
        let currentAttendances = Number(input.shift());

       let currentBonusPoints = currentAttendances / countOfLectures * (5 + additionalBonus);
        
        if (currentBonusPoints >= maxBonusPoints) {
            maxBonusPoints = currentBonusPoints;
            maxAttendances = currentAttendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);