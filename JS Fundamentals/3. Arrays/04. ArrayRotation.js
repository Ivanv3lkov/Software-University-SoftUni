//function arrayRotation(numbers, rotations) {
//
//    while (rotations > 0) {
//        let firstEl = numbers[0];
//
//        for (let i = 0; i < numbers.length; i++) {
//            numbers[i] = numbers[i + 1];
//        }
//
//        numbers[numbers.length - 1] = firstEl;
//        rotations--;
//    }
//    console.log(numbers.join(' '));
//}
//
//arrayRotation([51, 47, 32, 61, 21], 2);


function solve(array, rotations) {
    
    for (let i = 0; i < rotations % array.length; i++) {
        array.push(array.shift());

    }
    console.log(array.join(' '));
}
solve([51, 47, 32, 61, 21], 2);