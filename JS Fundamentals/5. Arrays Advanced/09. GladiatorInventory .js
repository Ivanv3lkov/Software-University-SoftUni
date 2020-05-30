function solve(input) {
    let inventory = input.shift().split(' ');

    for (let el of input) {
        let tokens = el.split(' ');
        let command = tokens[0];

        if (command === 'Buy') {
            let equipment = tokens[1];
            buy(equipment);
        } else if (command === 'Trash') {
            let equipment = tokens[1];
            trash(equipment);
        } else if (command === 'Repair') {
            let equipment = tokens[1];
            repair(equipment);
        } else if (command === 'Upgrade') {
            let elements = tokens[1].split('-');
            let equipment = elements[0];
            let upgrade = elements[1];
            upgradee(equipment, upgrade);
        }
    }

    console.log(inventory.join(' '));

    function buy(equipment) {
        let isBought = inventory.includes(equipment);

        if (!isBought) {
            inventory.push(equipment);
        }
    }

    function trash(equipment) {
        let indexOfEquipment = inventory.indexOf(equipment);

        if (indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment, 1);
        }
    }

    function repair(equipment) {
        let indexOfEquipment = inventory.indexOf(equipment);

        if (indexOfEquipment !== -1) {
            inventory.push(inventory.splice(indexOfEquipment, 1));
        }
    }

    function upgradee(equipment, upgrade) {
        let indexOfEquipment = inventory.indexOf(equipment);

        if (indexOfEquipment !== -1) {
            inventory.splice(indexOfEquipment + 1, 0, `${equipment}:${upgrade}`)
        }
    }
}

solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);