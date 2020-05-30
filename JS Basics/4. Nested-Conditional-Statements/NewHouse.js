function newHouse(input) {
    let flowers = input.shift();
    let flowerNumber = Number(input.shift());
    let budget = Number(input.shift());
    let sum = 0;


    switch (flowers) {
        case 'Roses': {
            sum = flowerNumber * 5;
            if (flowerNumber > 80) {
                sum *= 0.9;
            }
        }; break;
        case 'Dahlias': {
            sum = flowerNumber * 3.8;
            if (flowerNumber > 90) {
                sum *= 0.85;
            }
        }; break;
        case 'Tulips': {
            sum = flowerNumber * 2.8;
            if (flowerNumber > 80) {
                sum *= 0.85;
            }
        }; break;
        case 'Narcissus': {
            sum = flowerNumber * 3;
            if (flowerNumber < 120) {
                sum *= 1.15;
            }
        }; break;
        case 'Gladiolus': {
            sum = flowerNumber * 2.5;
            if (flowerNumber < 80) {
                sum *= 1.20;
            }; break;
            
        }
    }
    if (sum <= budget) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowers} and ${Math.abs(sum - budget).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(sum - budget).toFixed(2)} leva more.`);
    }

}


newHouse(['Tulips','88','260']);


