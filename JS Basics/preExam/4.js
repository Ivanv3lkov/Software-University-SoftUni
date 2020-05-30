function solve(input) {
    let sumForGuest = Number(input.shift());
    let command = input.shift();

    let peopleCounter = 0;
    let income = 0;
    let kuvert = 0;

    while (command != "The restaurant is full") {
        let currentPeople = Number(command);
        peopleCounter += currentPeople;

        if (currentPeople < 5) {
            kuvert = currentPeople * 100;
        } else {
            kuvert = currentPeople * 70;
        }

        income += kuvert;

        command = input.shift();
    }
    if (income >= sumForGuest) {
        let diff = income - sumForGuest;
        console.log(`You have ${peopleCounter} guests and ${diff} leva left.`);
    } else {
        console.log(`You have ${peopleCounter} guests and ${income} leva income, but no singer.`);
    }
}

solve([2800, 5, 5, 4, 6, 6, 12, 12, "The restaurant is full"]);