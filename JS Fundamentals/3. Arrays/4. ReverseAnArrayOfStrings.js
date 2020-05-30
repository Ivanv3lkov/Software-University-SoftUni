function reverse(arrayOfStrings) {
    
  let output = ' ';

  for (let i = arrayOfStrings.length - 1; i >= 0; i--) {

    output += `${arrayOfStrings[i]} `;
  }

  console.log(output.trim());
}

reverse(['a', 'b', 'c', 'd', 'e']);

//SECOND SOLVE
//function reverse(arrayOfStrings) {
//    
//    let reversedArray = [];
//
//    for (let el of arrayOfStrings) {
//        reversedArray.push(el);
//    }
//
//    console.log(reversedArray.reverse().join(' '));
//}