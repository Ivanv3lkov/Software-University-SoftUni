function scholarship(input) {
    let parrentIncome = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minimumWage = Number(input.shift());

    let social = 0;
    let excellent = 0;

    if (parrentIncome < minimumWage && averageGrade > 4.5 ) {
        social = 0.35 * minimumWage;
    }

    if (averageGrade >= 5.50) {
        excellent = 25 * averageGrade;
    }

    if ((social > excellent) && social !== 0) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
    } else if ((social <= excellent) && excellent !== 0) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
    } else {
        console.log("You cannot get a scholarship!");
    }
}




scholarship(['300.00', '5.65', '420.00']);