// function solve(arrOfStrings, n) {
//     let output = [];
//     for (let i = 0; i < arrOfStrings.length; i += n) {
//         output.push(arrOfStrings[i]);
//     }

//     return output;
// }

function solve(inputArr, step) {
    return (inputArr.filter((el, i) => i % step === 0));
}

console.log(solve(['5', '20', '31', '4', '20'], 2));