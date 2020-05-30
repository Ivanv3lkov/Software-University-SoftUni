function solve(input) {
    let width = Number(input.shift());
    let height = Number(input.shift());
    let deep = Number(input.shift());
    let ticketType = input.shift();

    let luggageSize = width * height * deep;
    let tax = 0;

    if (luggageSize <= 50) {
        tax = 0;
    } else if (luggageSize > 50 && luggageSize <= 100) {
        if (ticketType == "true") {
            tax = 0;
        } else {
            tax = 25;
        }
    } else if (luggageSize > 100 && luggageSize <= 200) {
        if (ticketType == "true") {
            tax = 10;
        } else {
            tax = 50;
        }
    } else if (luggageSize > 200 && luggageSize <= 300) {
        if (ticketType == "true") {
            tax = 20;
        } else {
            tax = 100;
        }
    }
    console.log(`Luggage tax: ${tax.toFixed(2)}`);
}

solve(["2", "5", "3", "false"]);