function getCircleArea(param) {
    let circleArea;

    if (typeof (param) !== 'number') {
        circleArea = `We can not calculate the circle area, because we receive a ${typeof param}.`
    } else {
        let r = param;
        circleArea = Number((Math.PI * r ** 2).toFixed(2));
    }

    return circleArea;
}

console.log(getCircleArea(5));