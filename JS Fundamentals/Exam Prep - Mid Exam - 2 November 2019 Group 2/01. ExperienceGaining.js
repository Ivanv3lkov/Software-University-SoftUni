function solve(input) {
    let neededExperience = Number(input.shift());
    let countOfBattles = Number(input.shift());

    let gatheredExperience = 0;
    let battleCount = 0

    for (let battle = 1; battle <= countOfBattles; battle++) {
        let currentBattleExperience = Number(input.shift());
        battleCount = battle;

        if (battle % 3 === 0) {
            currentBattleExperience *= 1.15;
        }

        if (battle % 5 === 0) {
            currentBattleExperience *= 0.90;
        }

        gatheredExperience += currentBattleExperience;

        if (gatheredExperience >= neededExperience) {
            break;
        }
    }

    if (gatheredExperience < neededExperience) {
        let lackOfExperience = neededExperience - gatheredExperience;
        console.log(`Player was not able to collect the needed experience, ${lackOfExperience.toFixed(2)} more needed.`);
    } else {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    }
}

solve([
    '500', '5',
    '50', '100',
    '200', '100',
    '30']);