function solve(input) {
    let n = Number(input[0]);

    let oddSum = 0; //  сума на числата на нечетни позиции
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER; //максимална стойност на числата на нечетни позиции

    let evenSum = 0 //  сума на числата на четни позиции 
    let evenMin = Number.MAX_SAFE_INTEGER //  минимална стойност на числата на четни позиции 
    let evenMax = Number.MIN_SAFE_INTEGER // максимална стойност на числата на четни позиции

    let oddCounter = 0;
    let evenCounter = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);

        if (i % 2 !== 0) {
            if (number > oddMax) {
                oddMax = number;
            }
            if (number < oddMin) {
                oddMin = number;
            }
            oddSum += number;
            oddCounter++
        } else {
            if (number > evenMax) {
                evenMax = number;
            }
            if (number < evenMin) {
                evenMin = number;
            }
            evenSum += number;
            evenCounter++
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin != 0 && oddCounter != 0) {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    } else {
        console.log('OddMin=No,');
    }

    if (oddMax != 0 && oddCounter != 0) {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    } else {
        console.log('OddMax=No,');
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMin != 0 && evenCounter != 0) {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    } else if (evenMin == 0 || evenCounter == 0) {
        console.log('EvenMin=No,');
    }

    if (evenMax != 0 && evenCounter != 0) {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    } else if (evenMax == 0 ||  evenCounter == 0) {
        console.log('EvenMax=No');
    }

}

solve([1,1]);