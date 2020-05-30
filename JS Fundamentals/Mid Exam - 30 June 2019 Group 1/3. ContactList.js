function solve(input) {
    let contacts = input.shift().split(' ');
    let exportArr = [];

    for (let contact of input) {

        let tokens = contact.split(' ');

        if (tokens[0] === 'Add') {
            let contact = tokens[1];
            let index = Number(tokens[2]);
            add(contact, index);
        } else if (tokens[0] === 'Remove') {
            let index = Number(tokens[1]);
            remove(index);
        } else if (tokens[0] === 'Export') {
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[2]);
            exporting(startIndex, count);
        } else if (tokens[0] === 'Print') {
            if (tokens[1] === 'Normal') {
                console.log(`Contacts: ${contacts.join(' ')}`);
                break;
            } else if (tokens[1] === 'Reversed') {
                console.log(`Contacts: ${contacts.reverse().join(' ')}`);
                break;
            }
        }
    }

    function add(contact, index) {
        let isExists = contacts.includes(contact);
        if (!isExists) {
            contacts.push(contact);
        } else {
            if (index >= 0 && index < contacts.length) {
                contacts.splice(index, 0, contact);
            }
        }
    }

    function remove(index) {
        if (index >= 0 && index < contacts.length) {
            contacts.splice(index, 1);
        }
    }

    function exporting(startIndex, count) {

        exportArr = contacts.slice(startIndex, startIndex + count);
        console.log(exportArr.join(' '));
    }
}

solve([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
]);