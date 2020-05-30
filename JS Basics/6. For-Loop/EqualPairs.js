function solve(input) {
    let n = Number(input.shift());
    let first = Number(input.shift());
    let second = Number(input.shift());
    let sum = first + second;
    let previousSum = sum;
    let maxDiff = 0;
    let diff = 0;
  

    for (let i = 2; i <= n ; i++) {
        let first = Number(input.shift());
        let second = Number(input.shift());
        sum = first + second;

        if (previousSum != sum) {
            diff = Math.abs(sum - previousSum);
            if (maxDiff < diff) {
                maxDiff = diff;
            }
        }
        previousSum = sum;
        }
        if (maxDiff == 0) {
            console.log(`Yes, value=${sum}`);
        } else {
            console.log(`No, maxdiff=${maxDiff}`);
        }
    }


solve([3,1,2,0,3,4,-1]);