function solve(text) {
   let words = text.match(/\w+/gim);
   let output = '';

   for (const word of words) {
       output += word.toUpperCase() + ', ';
   }

   output = output.substr(0, output.length - 2);

   return output;
}

console.log(solve('Hi, how are you?'));