function solve(input) {
    let limitFirstNum = Number(input.shift());
    let limitSecondNum = Number(input.shift());
    let limitThirdNum = Number(input.shift());
   


    for (let i = 2; i <= limitFirstNum; i += 2) {
        for (let j = 2; j <= limitSecondNum; j++) {
            for (let k = 2; k <= limitThirdNum; k += 2) {
                let isPrime = true;
                for (let l = 2; l <= j / 2; l++) {
                    if (j % l == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}


solve([3, 5, 5]);