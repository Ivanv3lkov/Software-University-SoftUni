function solve(array) {
    let rotations = Number(array.pop());

    for (let i = 0; i < rotations % array.length; i++) {
        array.unshift(array.pop());
        
    }
    console.log(array.join(' '));
}

    
solve(['1', '2', '3', '4', '2']);