function smallestTwoNums(arr) {

    let sortedByAscending = arr.sort((a, b) => a - b);
    
    let result = sortedByAscending.slice(0, 2);

    console.log(result.join(' '));
}

smallestTwoNums([3, 0, 10, 4, 7, 3]);