function rectangle(width, height, inputColor) {
    let color = inputColor[0].toUpperCase() + inputColor.slice(1);
    return {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
