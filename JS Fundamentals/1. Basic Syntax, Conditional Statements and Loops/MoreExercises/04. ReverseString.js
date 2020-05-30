function reversedString(input) {

    let reversed = '';

   for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i];
   }
   console.log(reversed);
   
}
reversedString('SoftUni');