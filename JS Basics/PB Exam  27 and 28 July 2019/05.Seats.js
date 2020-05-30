function solve(input) {
    let ticketsCount = Number(input.shift());

    let realTicketNumber = "";

    for (let i = 0; i < ticketsCount; i++) {
        let ticketNumber = input[i];

        let firstSymbol = ticketNumber.charCodeAt(0);
        let secondSymbol = ticketNumber.charCodeAt(1);

        if (firstSymbol >= 65 && firstSymbol <= 90 && ticketNumber.length == 4) {
            realTicketNumber = `${ticketNumber[0]}${ticketNumber[1]}${ticketNumber[2]}`;
        } else if (firstSymbol < 65 || firstSymbol > 90 && ticketNumber.length == 4) {
            realTicketNumber = `${ticketNumber[3]}${ticketNumber[1]}${ticketNumber[2]}`
        } else {
            realTicketNumber = `${ticketNumber[0]}${secondSymbol}`
        }
        console.log(`Seat decoded: ${realTicketNumber}`);
    }
}
solve(['3', '042W', 'W981', 'W24578' ]);