function solve(input) {
    let movie = input.shift();

    let student = 0;
    let standard = 0;
    let kid = 0;
    let totalTickets = 0;

    while (movie !== 'Finish') {
        let freeSpace = Number(input.shift());
        let ticketType = input.shift();
        let numberPeople = 0;

        while (ticketType !== 'End') {
            numberPeople++;
            totalTickets++;

            if (ticketType == 'student') {
                student++;
            } else if (ticketType == 'standard') {
                standard++;
            } else if (ticketType == 'kid') {
                kid++;
            }

            if (freeSpace <= numberPeople) {
                break;
            }

            ticketType = input.shift();
        }
        console.log(`${movie} - ${((numberPeople / freeSpace) * 100).toFixed(2)}% full.`);
        movie = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}

solve([
    'Taxi', '10',
    'standard', 'kid',
    'student', 'student',
    'standard', 'standard',
    'End', 'Scary Movie',
    '6', 'student',
    'student', 'student',
    'student', 'student',
    'student', 'Finish'
]);