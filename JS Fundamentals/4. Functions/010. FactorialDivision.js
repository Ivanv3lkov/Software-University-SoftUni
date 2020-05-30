function factorialDivison(numOne, numTwo) {

    function factorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let factorialOne = factorial(numOne);
    let factorialTwo = factorial(numTwo);

    console.log((factorialOne / factorialTwo).toFixed(2));
}

factorialDivison(5, 2);