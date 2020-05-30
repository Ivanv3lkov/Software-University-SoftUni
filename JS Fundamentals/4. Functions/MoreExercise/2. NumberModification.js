function numModification(number) {
    let numberToString = number.toString();
    let sumOfInput = 0;

    for (let i = 0; i < numberToString.length; i++) {
      
        for (let j = 0; j < numberToString.length; j++) {
            let currentDigit = Number(numberToString[j]);

            sumOfInput += currentDigit;
        }

        if (sumOfInput / numberToString.length > 5) {
            break;
        } else {
            i--;
            j = 0;
            numberToString += 9;
            sumOfInput = 0;
        }
    }

    if (sumOfInput / numberToString.length > 5){
        console.log(Number(numberToString));   
    }
}

numModification(5835);