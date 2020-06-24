function solve(input) {
    let targets = input.shift().split('|').map(n => Number(n));
    let points = 0;

    let command = input.shift();

    while (command !== 'Game over') {
        let [currentCommand, startIndex, range] = command.split('@');
        startIndex = Number(startIndex)
        range = Number(range);

        if (currentCommand === 'Shoot Left') {
            if (startIndex >= 0 && startIndex < targets.length) {
                while (range != 0) {
                    if (startIndex > 0) {
                        startIndex--;
                        range--;
                    } else if (startIndex === 0) {
                        startIndex = targets.length - 1;
                        range--;
                    }
                }

                if (targets[startIndex] >= 5) {
                    targets[startIndex] -= 5;
                    points += 5;
                } else {
                    points += targets[startIndex];
                    targets[startIndex] = 0;
                }
            }
        } else if (currentCommand == 'Shoot Right') {
            if (startIndex >= 0 && startIndex < targets.length) {
                while (range != 0) {
                    if (startIndex < targets.length - 1) {
                        startIndex++;
                        range--;
                    } else if (startIndex == targets.length - 1) {
                        startIndex = 0;
                        range--;
                    }
                }

                if (targets[startIndex] >= 5) {
                    targets[startIndex] -= 5;
                    points += 5;
                } else {
                    points += targets[startIndex];
                    targets[startIndex] = 0;
                }
            }
        } else if (currentCommand == 'Reverse') {
            targets.reverse();
        }

        command = input.shift();
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}

solve([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
]);