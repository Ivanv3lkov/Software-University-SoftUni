function stringLength(...args) {
    let sumLengthStr = args.map(str => str.length).reduce((acc, curVal) => acc + curVal, 0)
    let avgLength = Math.floor(sumLengthStr / args.length)
    console.log(sumLengthStr); 
    console.log(avgLength);
}

stringLenght('chocolate', 'ice cream', 'cake')