function solve(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let output = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let iText = i.toString();
        let leftSum = Number(iText[0]) + Number(iText[1]);
        let middleDigit = Number(iText[2]);
        let rightSum = Number(iText[3]) + Number(iText[4]);

        if (leftSum == rightSum) {
            output += i + " ";
        } else if (leftSum > rightSum) {
            rightSum += middleDigit;
            if (leftSum == rightSum) {
                output += i + " ";
            }
        } else if (leftSum < rightSum) {
            leftSum += middleDigit;
            if (leftSum == rightSum) {
                output += i + " ";
            }
        }
    }
    console.log(output);
}

solve([10000, 10100]);