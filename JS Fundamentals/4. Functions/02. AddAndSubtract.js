function solve(a, b, c) {
    
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(a, b) {
        return a - b;
    }

    let sumResult = sum(a, b);
    let result = subtract(sumResult, c);

    console.log(result);   
}

solve(23, 6, 10);