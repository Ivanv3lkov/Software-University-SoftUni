function solve(arr) {
    let rotations = arr.pop();

    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}

console.log(solve(	['Banana', 'Orange', 'Coconut', 'Apple', '15']

));