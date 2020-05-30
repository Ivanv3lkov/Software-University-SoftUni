function animalType(input) {
    let animal = input.shift();

    if (animal === 'dog') {
        console.log('mammal');
    } else if (animal === 'crocodile' || animal === 'tortoise' || animal === 'snake' ) {
        console.log('reptile');
    } else {
        console.log('unknown');
    }
}

animalType(['cat']);