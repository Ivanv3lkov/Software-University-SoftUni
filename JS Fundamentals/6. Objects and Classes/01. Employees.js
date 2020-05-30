function solve(input) {

    let employees = [];

    for (let personName of input) {
        let personObject = {
            name: personName,
            personalNumber: personName.length

        };
        employees.push(personObject);
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);