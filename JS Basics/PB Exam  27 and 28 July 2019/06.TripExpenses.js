function solve(input) {
    let days = Number(input.shift());
    let reminder = 0;

    for (let i = 0; i < days; i++) {

        let balance = 60 + reminder;
        let itemCount = 0;
        let command = input.shift();

        while (true) {
            if (command == "Day over") {
                console.log(`Money left from today: ${balance.toFixed(2)}. You've bought ${itemCount} products.`);
                reminder = balance;
                break;
            }
            let itemPrice = Number(command);
            
            if (itemPrice <= balance) {
                itemCount++;
                balance -= itemPrice;
            }
            if (balance == 0) {
                console.log(`Daily limit exceeded! You've bought ${itemCount} products.`);
                break;
            }
            command = input.shift();
        }
    }
}

solve([
    '3', '20',
    '40', '40',
    '15', 'Day over',
    '15', '5',
    '10', '17',
    '10', 'Day over'
]);