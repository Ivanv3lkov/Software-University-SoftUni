function solve(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i++) {
        let product = input.shift();
        eggs = false;
        flour = false;
        sugar = false;

        while (true) {
            if (product == 'Bake!') {
                if (eggs && flour && sugar) {
                    console.log(`Baking batch number ${i}...`);
                    break;
                } else {
                    console.log("The batter should contain flour, eggs and sugar!");
                    product = input.shift();
                }
            }

            if (product == 'eggs') {
                eggs = true;
            } else if (product == 'flour') {
                flour = true;
            } else if (product == 'sugar') {
                sugar = true;
            }
            product = input.shift();
        } 
    }
}

solve([2,
    "flour",
    "eggs",
    "sugar",
    "chocolate",
    "Bake!",
    "flour",
    "eggs",
    "sugar",
    "caramel",
    "peanuts",
    "Bake!"
]);