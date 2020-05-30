function fuelTank(input) {
    let typeFuel = input.shift();
    let availableFuel = Number(input.shift());

   if (typeFuel == 'Diesel' || typeFuel == 'Gasoline' || typeFuel == 'Gas') {
       if (availableFuel >= 25) {
           console.log(`You have enough ${typeFuel.toLowerCase()}.`);
       } else {
           console.log(`Fill your tank with ${typeFuel.toLowerCase()}!`);
       }
   } else {
       console.log('Invalid fuel!');
   } 
}

fuelTank(['Gasoline', '40']);
