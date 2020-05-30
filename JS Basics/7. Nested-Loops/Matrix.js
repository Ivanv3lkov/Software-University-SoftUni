function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let firstRowFirstNumber = a; firstRowFirstNumber <= b; firstRowFirstNumber++) {
        for (let firstRowSecondNumber = a; firstRowSecondNumber <= b; firstRowSecondNumber++) {
            for (let secondRowFirstNumber = c; secondRowFirstNumber <= d; secondRowFirstNumber++) {
                for (let secondRowSecondNumber = c; secondRowSecondNumber <= d; secondRowSecondNumber++) {
                    let firstDiagonalSum = firstRowFirstNumber + secondRowSecondNumber;
                    let secondDiagonalSum = firstRowSecondNumber + secondRowFirstNumber;
                    let firstRowIsNotEqual = firstRowFirstNumber !== firstRowSecondNumber;
                    let secondRowIsNotEqual = secondRowFirstNumber !== secondRowSecondNumber;

                    if (firstDiagonalSum === secondDiagonalSum && firstRowIsNotEqual && secondRowIsNotEqual) {
                        console.log(`${firstRowFirstNumber}${firstRowSecondNumber}`);
                        console.log(`${secondRowFirstNumber}${secondRowSecondNumber}`);
                        console.log();
                    }
                }
            }
        }
    }
}

solve(['1', '2', '3', '4'])