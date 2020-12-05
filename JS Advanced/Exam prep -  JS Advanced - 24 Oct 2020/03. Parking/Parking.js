class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === this.vehicles.length) {
            throw new Error('Not enough parking space.');
        }

        const car = {
            carModel,
            carNumber,
            payed: false
        }

        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const car = this.vehicles.find(car => car.carNumber === carNumber);

        if (!car) {
            throw new Error("The car, you're looking for, is not found.")
        } else {
            if (car.payed === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            } else {
                const indexOfCar = this.vehicles.indexOf(car);
                this.vehicles.splice(indexOfCar, 1);
                return `${carNumber} left the parking lot.`;
            }
        }
    }

    pay(carNumber) {
        const car = this.vehicles.find(car => car.carNumber === carNumber);

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else {
            if (car.payed === true) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`)
            } else {
                car.payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`
            }
        }
    }

    getStatistics(carNumber) {
        if (carNumber === undefined) {
            const emptySlots = Number(this.capacity) - Number(this.vehicles.length);
            const output = [`The Parking Lot has ${emptySlots} empty spots left.`];
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (let car of this.vehicles) {
                if (car.payed === true) {
                    output.push(`${car.carModel} == ${car.carNumber} - Has payed`);
                } else {
                    output.push(`${car.carModel} == ${car.carNumber} - Not payed`);
                }
            }
            return output.join('\n');
        } else {
            const car = this.vehicles.find(car => car.carNumber === carNumber);
            if (car.payed === true) {
                return `${car.carModel} == ${carNumber} - Has payed`;
            } else {
                return `${car.carModel} == ${carNumber} - Not payed`;
            }
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
