function solve(input) {
    let hall = Number(input.shift());

    let statuettes = hall * 0.70;
    let catering = statuettes * 0.85;
    let sound = catering * 0.50;

    let sum = hall + statuettes + catering + sound;

    console.log(sum.toFixed(2));
}

solve(["3500"]);