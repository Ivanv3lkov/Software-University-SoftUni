function solve(...args) {
    let sum = 0;
    let avgSum = 0;

    for (let el of args) {
        sum += Number(el.length);

    }
    avgSum = sum / args.length;

    console.log(sum);
    console.log(Math.floor(avgSum));

}

solve('chocolate', 'ice cream', 'cake')
