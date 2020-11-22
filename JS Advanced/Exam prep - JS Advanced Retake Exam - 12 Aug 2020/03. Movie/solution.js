class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.soldTickets = 0;
    }

    newScreening(date, hall, description) {
        const isScreeningExist = this.screenings.find(screening => screening.date === date && screening.hall === hall);

        if (isScreeningExist) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        } else {
            this.screenings.push({
                date,
                hall,
                description,
                movieProfit: 0
            });
            return `New screening of ${this.movieName} is added.`
        }
    }

    endScreening(date, hall, soldTickets) {
        const isScreeningExist = this.screenings.find(screening => screening.date === date && screening.hall === hall);

        if (!isScreeningExist) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        } else {
            let currentProfit = Number(soldTickets) * this.ticketPrice;
            isScreeningExist.movieProfit += currentProfit;

            this.soldTickets += Number(soldTickets);
            this.totalProfit += currentProfit;
            let indexOfScreening = this.screenings.indexOf(isScreeningExist);
            this.screenings.splice(indexOfScreening, 1);
        }
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${isScreeningExist.movieProfit}`
    }

    toString() {
        let output = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed()}$`,
            `Sold Tickets: ${this.soldTickets}`
        ];

        if (this.screenings.length > 0) {
            const sortedMovies = Object.values(this.screenings).sort((a, b) => a.hall.localeCompare(b.hall));
            output.push('Remaining film screenings:');
            for (let screen of sortedMovies) {
                output.push(`${screen.hall} - ${screen.date} - ${screen.description}`);
            }
        } else {
            output.push('No more screenings!');
        }
       
        return output.join('\n');
    }
}

//test

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());



