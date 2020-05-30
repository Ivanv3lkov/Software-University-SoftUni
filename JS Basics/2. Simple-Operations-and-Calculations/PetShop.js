function petShop(input) {
    let dogs = Number(input.shift()); 
    let otherAnimals = Number(input.shift());
    let foodDogs = 2.50;
    let foodAnimals = 4;
    let totalSum = ( (dogs * 2.50) + (otherAnimals * 4) );

    console.log(`${totalSum.toFixed(2)} lv.`);

}

petShop( [ "13", "9"]);