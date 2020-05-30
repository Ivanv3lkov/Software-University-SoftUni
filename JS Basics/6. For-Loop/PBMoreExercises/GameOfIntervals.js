function solve(input) {
    let turns = Number(input.shift());

    let result = 0;
    let counterFrom0To9 = 0;
    let counterFrom10To19 = 0
    let counterFrom20To29 = 0
    let counterFrom30To39 = 0;
    let counterFrom40To50 = 0
    let invalidNumber = 0;
    
    for (let i = 0; i < turns; i++) {
        let number = Number(input.shift());

        if (number >= 0 && number < 10) {
            result += number * 0.20;
            counterFrom0To9++;
        } else if (number >= 10 && number < 20){
            result += number * 0.30;
            counterFrom10To19++;
        } else if (number >= 20 && number < 30) {
            result += number * 0.40;
            counterFrom20To29++;
        } else if (number >= 30 && number < 40) {
            result += 50;
            counterFrom30To39++;
        } else if (number >= 40 && number <= 50) {
            result += 100;
            counterFrom40To50++;
        } else {
            result = result / 2;
            invalidNumber++;
        }
    }
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${((counterFrom0To9 / turns) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((counterFrom10To19 / turns) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((counterFrom20To29 / turns) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((counterFrom30To39 / turns) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((counterFrom40To50 / turns) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((invalidNumber / turns) * 100).toFixed(2)}%`);
}

solve([
    '10', '43', '57',
    '-12', '23', '12',
    '0', '50', '40',
    '30', '20'
]);