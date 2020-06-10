function arrayMap(arr, fn) {
    return arr.reduce(function (acc, curr) {
        return acc.concat(fn(curr));    
    }, []);
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2)); // [ 2, 4, 6, 8, 10 ]
