function showTheLargestNumber(...nums) {
    let theLargestNumber = Math.max(...nums);
    return `The largest number is ${theLargestNumber}.`
}

console.log(showTheLargestNumber(-3, -5, -22.5));