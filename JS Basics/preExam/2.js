function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let avgHeightA = Number(input.shift());

    let shipSize = width * length * height;
    let roomSize = (avgHeightA + 0.40) * 2 * 2;

    let shipCapacity = Math.floor(shipSize / roomSize);

    if (shipCapacity >= 3 && shipCapacity <= 10) {
        console.log(`The spacecraft holds ${shipCapacity} astronauts.`);
    } else if (shipCapacity < 3) {
        console.log(`The spacecraft is too small.`);
    } else {
        console.log(`The spacecraft is too big.`);
    }
}

solve([3.5, 4, 5, 1.70]);