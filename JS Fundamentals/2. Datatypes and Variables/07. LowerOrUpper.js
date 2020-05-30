function solve(letter) {
    let ascii = letter.charCodeAt(0);

    if (65 <= ascii && ascii <= 90) {
        console.log('upper-case');
    } 

    if (97 <= ascii && ascii <= 122) {
        console.log('lower-case');
    }
}

solve('L')


//function secondSolve(letter) {
//    
//    if (letter.toUpperCase() === letter) {
//        console.log('upper-case');
//    } else {
//        console.log('lower-case');
//    }
//}

