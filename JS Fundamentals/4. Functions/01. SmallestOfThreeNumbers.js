function smallestNumber(numOne, numTwo, numThree) {

    let min = Math.min(numOne, numTwo, numThree);

    console.log(min);

}

smallestNumber(600, 342, 123);

//
function secondSolve(a, b, c) {

    let min = c;

    if (a <= b && a <= c) {
        min = a;
    } else if (b <= a && b <= c) {
        min = b;
    }
    console.log(min);   
}

secondSolve(1, 2 ,3);