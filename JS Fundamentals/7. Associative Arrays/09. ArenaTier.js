function solve(input) {
    let obj = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        }
        let element = line.split(' ');
        if (element[1] === '->') {
            let [gladiator, technique, skillAmount] = line.split(' -> ');
            skillAmount = Number(skillAmount);

            if (!obj.hasOwnProperty(gladiator)) {
                obj[gladiator] = {};
            }

            if (!obj[gladiator].hasOwnProperty(technique)
                || obj[gladiator][technique] < skillAmount) {
                obj[gladiator][technique] = skillAmount;
            }
        } else if (element[1] === 'vs') {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = (obj[gladiator1]);
                let gladiator2Techniques = (obj[gladiator2]);

                for (let key in gladiator1Techniques) {

                    if (gladiator2Techniques.hasOwnProperty(key)) {

                        if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
                            delete obj[gladiator2];
                        } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
                            delete obj[gladiator1];
                        }
                    }
                }
            }
        }
    }

    for (let gladiator in obj) {
        let sum = 0;
        let gladiatorObj = obj[gladiator];
        for (let technique in gladiatorObj) {
            sum += gladiatorObj[technique];
        }
        gladiatorObj['sum'] = sum;
    }

    Object.entries(obj)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
        });
}

solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
)