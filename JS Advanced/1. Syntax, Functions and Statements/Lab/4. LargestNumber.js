function solve(...args) {
    let result = Math.max(...args);

    return `The largest number is ${result}.`

}

console.log(solve(-3, -5, -22.5));
