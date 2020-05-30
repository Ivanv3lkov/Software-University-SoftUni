function solve(input) {
    let days = Number(input.shift());
    let budget = Number(input.shift());
    let countOfPeople = Number(input.shift());
    let pricePerKm = Number(input.shift());
    let foodExpensesPerPerson = Number(input.shift());
    let roomPricePerPerson = Number(input.shift());

    let totalFoodExpenses = days * countOfPeople * foodExpensesPerPerson;
    let totalHotelExpenses = days * countOfPeople * roomPricePerPerson;
    if (countOfPeople > 10) {
        totalHotelExpenses *= 0.75;
    }
    let currentExpenses = totalFoodExpenses + totalHotelExpenses;

    for (let day = 1; day <= days; day++) {
        let currentDistance = Number(input.shift());
        currentExpenses += currentDistance * pricePerKm;

        if (day % 3 === 0 || day % 5 === 0) {
            currentExpenses += currentExpenses * 0.40;
        }

        if (day % 7 === 0) {
            currentExpenses -= currentExpenses / countOfPeople;
        }

        if (currentExpenses > budget) {
            break;
        }
    }
    let diff = Math.abs(currentExpenses - budget);
    if (budget >= currentExpenses) {
        console.log(`You have reached the destination. You have ${diff.toFixed(2)}$ budget left.`);
    } else {
        console.log(`Not enough money to continue the trip. You need ${diff.toFixed(2)}$ more.`);
    }
}

solve([
    '10',  '20500', '11',
    '1.2', '8',     '13',
    '100', '150',   '500',
    '400', '600',   '130',
    '300', '350',   '200',
    '300'
  ]);