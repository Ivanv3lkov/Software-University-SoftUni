function solve(number) {
    let firstLetterCode = 'a'.charCodeAt(0);

    for (let i = 0; i < number; i++) {

        for (let j = 0; j < number; j++) {

            for (let k = 0; k < number; k++) {

                let result = String.fromCharCode(
                    firstLetterCode + i,
                    firstLetterCode + j,
                    firstLetterCode + k );

                console.log(result);
            }
        }
    }
}

solve(3);