function solve3 (arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
 
    let firstPointToZero = Math.sqrt(x1**2 + y1**2);
    let secondPointToZero = Math.sqrt(x2**2 + y2**2);
   
    let pointToPointDistance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
 
    if (firstPointToZero % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (secondPointToZero % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (pointToPointDistance % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve3([3, 0, 0, 4]);