function solve(input) {

    let employees = {};

    for (let personName of input) {
         employees[personName] = personName.length;;
    }

    for (let employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);