function solve(input) {
    let days = Number(input.shift());
    let countOfPeople = Number(input.shift());
    let totalEnergy = Number(input.shift());
    let water = Number(input.shift());
    let food = Number(input.shift());

    let currentWater = days * countOfPeople * water;
    let currentFood = days * countOfPeople * food;

    for (let day = 1; day <= days; day++) {
        let energy = Number(input.shift());
        totalEnergy -= energy;

        if (totalEnergy <= 0) {
            break;
        }

        if (day % 2 === 0) {
            totalEnergy *= 1.05;
            currentWater *= 0.70;
        }

        if (day % 3 === 0) {
            totalEnergy *= 1.10;
            currentFood -= currentFood / countOfPeople
        }
    }

    if (totalEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${currentFood.toFixed(2)} food and ${currentWater.toFixed(2)} water.`);
    }
}

solve([
    '12',    '6',     '4430',
    '9.8',   '5.5',   '620.3',
    '840.2', '960.1', '220',
    '340',   '674',   '365',
    '345.5', '212',   '412.12',
    '258',   '496',   ''
  ]);