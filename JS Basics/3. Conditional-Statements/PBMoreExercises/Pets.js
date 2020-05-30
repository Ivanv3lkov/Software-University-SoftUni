function pets(input) {
    let days = Number(input.shift());
    let foodInKg = Number(input.shift());
    let foodDogInKg = Number(input.shift());
    let foodCatInKg = Number(input.shift());
    let foodTurtleInGrams = Number(input.shift());

    let totalFoodNeeded = (foodDogInKg + foodCatInKg + (foodTurtleInGrams / 1000)) * days;
    let diff = Math.abs(foodInKg - totalFoodNeeded);

    if (foodInKg >= totalFoodNeeded) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(['5','10','2.1','0.8','321']);