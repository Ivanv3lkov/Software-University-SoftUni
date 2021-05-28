function solve(arrOfStrings, strOne, strTwo) {
    let startIndex = arrOfStrings.indexOf(strOne);
    let endIndex = arrOfStrings.indexOf(strTwo);

    return arrOfStrings.slice(startIndex, endIndex + 1);
}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));