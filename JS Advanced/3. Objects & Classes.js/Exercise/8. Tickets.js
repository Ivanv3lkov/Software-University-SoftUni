function solve(tickets, criteria) {
    class Ticket {
        constructor(descriptor) {
            let [destination, price, status] = descriptor.split('|');
            this.destination = destination,
            this.price = Number(price),
            this.status = status;
        }
    }

    let comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status)
    };

    return tickets.map(t => new Ticket(t)).sort(comparator[criteria])
}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ], 'destination'
));