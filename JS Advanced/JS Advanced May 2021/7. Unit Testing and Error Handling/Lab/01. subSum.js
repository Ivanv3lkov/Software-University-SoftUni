function sum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (let el of arr) {
        if (isNaN(Number(el))) {
            return NaN;
        }
    }
    
    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length) {
        endIndex = arr[arr.length - 1];
    }

    return arr.slice(startIndex, endIndex + 1).reduce((acc, currValue) => acc + currValue, 0);
}
console.log(sum('text', 0, 2));