function solve(arrayOfStrings) {
    let firstEl = Number(arrayOfStrings.shift());
    let lastEl = Number(arrayOfStrings.pop());

    let sum = firstEl + lastEl;
    console.log(sum);
}

solve(['10', '17', '22', '33']);