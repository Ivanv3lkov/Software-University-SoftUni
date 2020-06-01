function solve(input) {
    return input
        .reduce((a, b) => a.concat(b))
        .sort(sortAscending)
        .pop();

    function sortAscending(a, b) {
        return a - b
    }
}
    console.log(solve([[20, 50, 10], [8, 33, 145]]));