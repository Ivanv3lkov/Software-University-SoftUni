function condenseArray(nums) {

    while (nums.length > 1) {
        let condensed = Array(nums.length - 1);
        
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
}

condenseArray([5, 0, 4, 1, 2]);