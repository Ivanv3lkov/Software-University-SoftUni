function solve(input) {
    let spellBook = {};
    let cmd = input.shift();

    while (cmd !== 'End') {
        let [command, heroName, spellName] = cmd.split(' ');

        if (command === 'Enroll') {
            if (!spellBook.hasOwnProperty(heroName)) {
                spellBook[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        } else if (command === 'Learn') {
            if (!spellBook.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (!spellBook[heroName].includes(spellName)) {
                    spellBook[heroName].push(spellName);
                } else {
                    console.log(`${heroName} has already learnt ${spellName}.`);
                }
            }
        } else if (command === 'Unlearn') {
            if (!spellBook.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`);
            } else {
                if (spellBook[heroName].includes(spellName)) {
                    let indexOfSpellName = spellBook[heroName].indexOf(spellName);
                    spellBook[heroName].splice(indexOfSpellName, 1);
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }
            }
        }

        cmd = input.shift();
    }

    let arr = Object.entries(spellBook).sort(sorting);

    function sorting(a, b) {
        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }

    console.log('Heroes:');
    arr.forEach(el => {
        console.log(`== ${el[0]}: ${el[1].join(', ')}`); 
    });
}

solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]
);