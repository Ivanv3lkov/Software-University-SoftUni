function solve(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        let food = arr[i];
        let calories = Number(arr[i + 1])
        result[food] = calories;
    }
    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));