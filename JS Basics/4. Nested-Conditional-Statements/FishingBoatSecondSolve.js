function fishingBoat(input) {
    let budged = Number(input.shift());
    let season = input.shift();
    let countFishermen = Number(input.shift());

    let price;

    switch (season) {
        case "Spring": {
            price = 3000;
        }; break;
        case "Summer":
        case "Autumn": {
            price = 4200;
        }; break;
        case "Winter": {
            price = 2600;
        }; break;
    }
    console.log(price);
}

    fishingBoat(['3000', 'Summer', 11]);