function solve(input) {
    let skill = input.shift();

    for (let line of input) {
        if (line === 'For Azeroth') {
            break;
        }
        let cmd = line.split(' ');

        switch (cmd[0]) {
            case 'GladiatorStance':
                skill = skill.toUpperCase();
                console.log(skill);
                break;
            case 'DefensiveStance':
                skill = skill.toLowerCase();
                console.log(skill);
                break;
            case 'Dispel':
                let index = Number(cmd[1]);
                let letter = cmd[2];
                if (index >= 0 && index < skill.length) {
                    let symbol = skill[index];
                    skill = skill.replace(symbol, letter);
                    console.log('Success!');
                } else {
                    console.log('Dispel too weak.');
                }
                break;
            case 'Target':
                if (cmd[1] === 'Change') {
                    let rgx = new RegExp(cmd[2], 'g');
                    skill = skill.replace(rgx, cmd[3]);
                    console.log(skill);
                } else if (cmd[1] === 'Remove') {
                    let rgx2 = new RegExp(cmd[2], 'g');
                    skill = skill.replace(rgx2, '');
                    console.log(skill);
                } else {
                    console.log("Command doesn't exist!");
                }
                break;
            default:
                console.log("Command doesn't exist!");
                break;
        }
    }
}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]
  
);