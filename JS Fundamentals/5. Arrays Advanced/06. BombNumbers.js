function solve(arr, bomb) {
    let output = arr.slice(0);
    
    while (output.includes(bomb[0])) {

        let bombIndex = output.indexOf(bomb[0]);
        let startIndex = Math.max(bombIndex - bomb[1], 0);
        output.splice(bombIndex, bomb[1] + 1);
        output.splice(startIndex, bomb[1]);
    }

    let result = output.reduce((acc, currentNum) => acc += currentNum, 0);

    console.log(result);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);