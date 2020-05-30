function solve(input) {
    let movieName = input.shift();

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;

    while (movieName != "Finish") {
        let freeSeats = Number(input.shift());
        let ticketType = input.shift();
        let tickets = 0;

        while (ticketType != "End") {
            tickets++;
            totalTickets++

            if (ticketType == "student") {
                studentTickets++;
            } else if (ticketType == "standard") {
                standardTickets++;
            } else if (ticketType == "kid") {
                kidTickets++;
            }

            if (freeSeats <= tickets) {
                break;
            }

            ticketType = input.shift();
        }

        console.log(`${movieName} - ${((tickets / freeSeats) * 100).toFixed(2)}% full.`);
        tickets = 0;
        movieName = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);

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