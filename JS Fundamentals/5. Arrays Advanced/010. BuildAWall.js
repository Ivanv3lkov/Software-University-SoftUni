function solve(wall) {
    wall = wall.map(Number);
    let complete = false;
    let log = [];

    while (!complete) {
        let crete = 0;
        complete = true;
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i] += 1;
                crete += 195;
                complete = false;
            }
        }
        if (!complete) log.push(crete);
    }
    console.log(log.join(', '));
    console.log(log.reduce((a, b) => a + b, 0) * 1900 + ' pesos');
}

solve([21, 25, 28]);