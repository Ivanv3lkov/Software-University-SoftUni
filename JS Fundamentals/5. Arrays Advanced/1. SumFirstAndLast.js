function sumFirstAndLast(arrayNums) {

    let firstNum = Number(arrayNums[0]);
    let lastNum = Number(arrayNums[arrayNums.length - 1]);
    let sumFirstAndLastNums = firstNum + lastNum;

    console.log(sumFirstAndLastNums);
}

//sumFirstAndLast(['20', '30', '40']);

function secondSolve(input) {
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());

    console.log(firstNum + lastNum); 
}

secondSolve(['20', '30', '40']);

