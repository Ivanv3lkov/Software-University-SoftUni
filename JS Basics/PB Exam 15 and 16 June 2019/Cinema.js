function solve(input) {
    let capacityHall = Number(input.shift());
    let entry = input.shift();

   
    let income = 0;
    let totalIncome = 0;


    while (entry != 'Movie time!') {
        let peopleCount = Number(entry);
        capacityHall -= peopleCount;
      
        if (capacityHall < 0) {
            console.log('The cinema is full.');
            break;
        }

        income = peopleCount * 5;

        if (peopleCount % 3 == 0) {
            income -= 5;
        }
        totalIncome += income;
        entry = input.shift();
    }

    if (entry == 'Movie time!') {
        console.log(`There are ${capacityHall} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${totalIncome} lv.`);
}

solve([50,15,10,10,15,5]);