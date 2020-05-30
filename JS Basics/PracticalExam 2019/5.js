function solve(input) {
    let passengersCount = Number(input.shift());

    let windowSeatsCounter = 0;
    let middleSeatsCounter = 0;
    let aisleSeatsCounter = 0;

    for (let i = 0; i < passengersCount; i++) {
        let seatNumber = input.shift();
        let letterSeatNumber = seatNumber[1];
        

        if (letterSeatNumber == "A" || letterSeatNumber == "F") {
            windowSeatsCounter++;
        } else if (letterSeatNumber == "B" || letterSeatNumber == "E") {
            middleSeatsCounter++;
        } else if (letterSeatNumber == "C" || letterSeatNumber == "D") {
            aisleSeatsCounter++;
        }
    }
    console.log(`Window Seats: ${((windowSeatsCounter / passengersCount) * 100).toFixed(2)}%`);
    console.log(`Middle Seats: ${((middleSeatsCounter / passengersCount) * 100).toFixed(2)}%`);
    console.log(`Aisle Seats: ${((aisleSeatsCounter / passengersCount) * 100).toFixed(2)}%`);
}

solve(['5', '1A', '6B', '9F', '3D', '2C']);