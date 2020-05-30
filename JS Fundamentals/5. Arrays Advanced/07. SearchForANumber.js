function solve(nums, criteria) {
    let arr = nums.slice(0, criteria[0]);
    arr = arr.splice(0, criteria[1]);
    let counter = 0;

    for (let num of arr) {
        if (num === criteria[2]) {
            counter++;
        }
    }

    console.log(`Number ${criteria[2]} occurs ${counter} times.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);