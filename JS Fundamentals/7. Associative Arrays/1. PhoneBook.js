function solve(input) {
    let phonebook = {};

    for (let el of input) {
        let [name, number] = el.split(' ');
        
        phonebook[name] = number;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);