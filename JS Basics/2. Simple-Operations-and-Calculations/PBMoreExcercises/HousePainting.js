function housePainting(input) {
    let x = Number(input.shift());
    let y = Number(input.shift());
    let h = Number(input.shift());

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let sumSideWalls = 2 * sideWall - 2 * window;

    let frontWall = x * x;
    let door = 1.2 * 2;
    let sumFrontAndBackWall = 2 * frontWall - door;

    let totalSumWalls = sumSideWalls + sumFrontAndBackWall;

    let sideRoof = x * y;
    let frontSideRoof = (x * h) / 2
    let sumRoof = 2 * sideRoof + 2 * frontSideRoof;

    let greenPaint = totalSumWalls / 3.4;
    let redPaint = sumRoof / 4.3;
    
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));

}

housePainting(['6', '10', '5.2']);