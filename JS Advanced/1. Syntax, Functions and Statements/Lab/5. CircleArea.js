function solve(input) {

    let circleArea;

    if (typeof (input) !== 'number') {
        circleArea = `We can not calculate the circle area, because we receive a ${typeof input}.`
    } else {
        let r = input;
        circleArea = Number((Math.PI * r ** 2).toFixed(2));
    }

    return circleArea;
}

console.log(solve(5));
