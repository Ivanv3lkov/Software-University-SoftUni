function solve(input) {
    let result = input.sort(sortAsc).slice(0, 2).join(' ');

    return result;
    
    function sortAsc(a, b) {
        return a - b;
    }
}

console.log(solve([3, 0, 10, 4, 7, 3]));