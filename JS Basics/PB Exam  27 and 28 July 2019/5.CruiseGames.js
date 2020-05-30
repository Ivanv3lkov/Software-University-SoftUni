function solve(input) {
    let playerName = input.shift();
    let gamesCount = Number(input.shift());

    let totalPoints = 0;
    let volleyballCounter = 0;
    let tennisCounter = 0;
    let badmintonCounter = 0;
    let pointsVolleyball = 0;
    let pointsTennis = 0;
    let pointsBadminton = 0;

    for (let i = 1; i <= gamesCount; i++) {
        let game = input.shift();
        let points = Number(input.shift());

        let currentVolleyPoints = 0;
        let currentTennisPoints = 0;
        let currentBadmintonPoints = 0;

        if (game == "volleyball") {
            volleyballCounter++;
            currentVolleyPoints = points + points * 7 / 100;
            pointsVolleyball += currentVolleyPoints; 
            totalPoints += currentVolleyPoints;
        } else if (game == "tennis") {
            tennisCounter++;
            currentTennisPoints = points + points * 5 / 100;
            pointsTennis += currentTennisPoints;
            totalPoints += currentTennisPoints;
        } else if (game == "badminton") {
            badmintonCounter++;
            currentBadmintonPoints = points + points * 2 / 100;
            pointsBadminton += currentBadmintonPoints;
            totalPoints += currentBadmintonPoints;
        }
    }
    if (pointsVolleyball / volleyballCounter >= 75 && pointsTennis / tennisCounter >= 75 && pointsBadminton / badmintonCounter >= 75) {
        console.log(`Congratulations, ${playerName}! You won the cruise games with ${Math.floor(totalPoints)} points.`);
    } else {
        console.log(`Sorry, ${playerName}, you lost. Your points are only ${Math.floor(totalPoints)}.`);
    }
}
solve([
    'Ivan', '7',
    'volleyball', '70',
    'tennis', '100',
    'badminton', '64',
    'volleyball', '125',
    'tennis', '62',
    'tennis', '72',
    'badminton', '87'
]);