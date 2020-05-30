function solve(input) {
    let height = Number(input.shift());
    let width = Number(input.shift());
    let percent = Number(input.shift());

    let percentWithoutPaint = percent / 100;
    let areaWalls = height * width * 4;
    let areaForPaint = Math.ceil(areaWalls - (areaWalls * percentWithoutPaint));

    let command = input.shift();
    
    while (command != 'Tired!') {
        let paintLiters = Number(command);
        areaForPaint -= paintLiters;
        
        if (areaForPaint <= 0) {
            break;
        }
      
        command = input.shift();
    }

    if (areaForPaint > 0) {
       console.log(`${areaForPaint} quadratic m left.`);
    } else if (areaForPaint == 0) {
        console.log('All walls are painted! Great job, Pesho!');
    } else {
        console.log(`All walls are painted and you have ${Math.abs(areaForPaint)} l paint left!`);
    }
}
solve([ '2', '3', '25', '6', '7', '8' ]);