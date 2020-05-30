function passwordValidator(password) {

    function isValidPassLength(passLength) {
        let isValid = true;

        if (passLength < 6 || passLength > 10) {
            isValid = false;
        }

        return isValid;
    }

    let isValidPassLengthVal = isValidPassLength(password.length);
    if (!isValidPassLengthVal) {
        console.log('Password must be between 6 and 10 characters');
    }

    function isBetweenRange(ch, start, end) {
        return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0);
    }

    function containsOnlyLettersAndDigits(password) {
        let isValid = true;

        for (let ch of password) {
            if (!(
                isBetweenRange(ch, 'A', 'Z') ||
                isBetweenRange(ch, 'a', 'z') ||
                isBetweenRange(ch, '0', '9'))
            ) {
                isValid = false;
            }
        }
        return isValid;
    }

    let containsOnlyLettersAndDigitsVal = containsOnlyLettersAndDigits(password);
    if (!containsOnlyLettersAndDigitsVal) {
        console.log('Password must consist only of letters and digits');
    }

    function containsAtLeastTwoDigits(password) {
        let digitCounter = 0;

        for (let ch of password) {
            if (isBetweenRange(ch, '0', '9')) {
                digitCounter++;

                if (digitCounter === 2) {
                    break;
                }
            }
        }
        return digitCounter === 2 ? true : false;
    }

    let containsAtLeastTwoDigitsVal = containsAtLeastTwoDigits(password);
    if (!containsAtLeastTwoDigitsVal) {
        console.log('Password must have at least 2 digits');
    }

    if (isValidPassLengthVal && containsOnlyLettersAndDigitsVal && containsAtLeastTwoDigitsVal) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s');
