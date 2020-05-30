function solve(binaryNumberAsString) {

    let decimalNumber = 0;

    for (let i = 0; i < binaryNumberAsString.length; i++) {
        let number = Number(binaryNumberAsString[i]);
        
        decimalNumber += number * (2 ** (binaryNumberAsString.length - 1 - i));
    }
    console.log(decimalNumber);
}
solve('111001');