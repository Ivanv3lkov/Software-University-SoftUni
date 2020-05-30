function solve(input) {
    let initial = input.shift().split(', ');
    let participants = {};
    initial
        .forEach((name) => {
            participants[name] = 0;
        });

    let namePattern = /[a-zA-Z]+/g;
    let distPattern = /\d/g;

    let racers = input.slice(0, input.indexOf('end of race'));
    racers
        .forEach(line => {
            let name = line.match(namePattern).join('');
            let distance = line.match(distPattern).map(Number).reduce((a, c) => a + c);
            if (participants.hasOwnProperty(name)) {
                participants[name] += distance;
            }
        })

    let output = Object.entries(participants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${output[0][0]}`);
    console.log(`2nd place: ${output[1][0]}`);
    console.log(`3rd place: ${output[2][0]}`);
}

solve(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
);