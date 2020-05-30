function palindromeIntegers(array) {

    function isPalindrome(text) {
        let len = text.length;
        let isPalindromeVal = true;

        for (let i = 0; i < Math.trunc(len / 2); i++) {
            if (text[i] !== text[len - 1 - i]) {
                isPalindromeVal = false;
                break;
            }
        }
        return isPalindromeVal;
    }

    for (let num of array) {
        console.log(isPalindrome(num.toString()));
    }
}

//palindromeIntegers([123, 323, 421, 121]);

function secondSolve(array) {

    for (let num of array) {
        let reversedNum = Number(num.toString().split("").reverse().join(""));

        if (num !== reversedNum) {
            console.log('false');
        } else {
            console.log('true');
        }
    }
}

//secondSolve([32, 2, 232, 1010]);


