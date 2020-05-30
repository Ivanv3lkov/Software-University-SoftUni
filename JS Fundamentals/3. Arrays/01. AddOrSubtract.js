function addOrSubtract(originalArray) {
    let modifiedArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        let currentEl = originalArray[i];

        if (currentEl % 2 === 0) {
            modifiedArray.push(currentEl + i);
        } else {
            modifiedArray.push(currentEl - i)
        }
    }

    console.log(modifiedArray);

    let originalArrSum = 0;
    let modifiedArrSum = 0;

    for (let index in originalArray) {
        originalArrSum += originalArray[index];
        modifiedArrSum += modifiedArray[index];
    }

    console.log(originalArrSum);
    console.log(modifiedArrSum);
}

addOrSubtract([5, 15, 23, 56, 35]);