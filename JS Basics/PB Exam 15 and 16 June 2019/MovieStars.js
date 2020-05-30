function solve(input) {
    let budgetActors = Number(input.shift());
    let actorName = input.shift();

    while (actorName != 'ACTION') {

        if (actorName.length > 15) {
            budgetActors -= budgetActors * 0.20;
        } else {
            let money = Number(input.shift());
            budgetActors -= money;
        }

        if (budgetActors < 0) {
            break;
        }
        actorName = input.shift();
    }

    if (budgetActors < 0) {
        console.log(`We need ${(Math.abs(budgetActors)).toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budgetActors.toFixed(2)} leva.`);
    }
}
solve(['170000','Ben Affleck',40000.50,'Zahari Baharov',80000,'Tom Hanks',2000.99,'ACTION']);