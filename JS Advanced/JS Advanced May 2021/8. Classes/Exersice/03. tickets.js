function solve(arrOfStrings, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];
    for (let line of arrOfStrings) {
        let [destination, price, status] = line.split('|');
        result.push(new Ticket(destination, price, status));
    }

    let comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status)
    };

   result.sort(comparator[sortCriteria]);

    return result;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
