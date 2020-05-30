function areaOfFigures(input) {
    let figure = input.shift();
    let area = null;

    if (figure == 'rectangle') {
        let side1 = Number(input.shift());
        let side2 = Number(input.shift());
        area = side1 * side2;
    } else if (figure == 'circle') {
        let r = Number(input.shift());
        area = Math.PI * r * r
    } else if (figure == 'square') {
        let side = Number(input.shift());
        area = side * side;
    } else {
        let side = Number(input.shift());
        let h = Number(input.shift());
        area = side * h/2;
    }
        console.log(area.toFixed(3));
}
areaOfFigures( ['rectangle','7','2.5']);