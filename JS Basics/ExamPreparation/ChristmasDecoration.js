function solve(input) {
    let budget = Number(input.shift());
    let command = input.shift();

    let priceItem = 0;

    while (command != "Stop") {

        for (let i = 0; i < command.length; i++) {
            priceItem += command.charCodeAt(i);
        }

        if (priceItem <= budget) {
            budget -= priceItem;
            console.log("Item successfully purchased!");
        } else {
            console.log("Not enough money!");
            break;
        }
        priceItem = 0;
        command = input.shift();
    }

    if (command == "Stop") {
        console.log(`Money left: ${budget}`);
    }
}

solve(['3000', 'star', 'Christmas tree', 'tinsel', 'Tree stand']);