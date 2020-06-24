function solve(input) {
    input.shift();
    let rgx = /(\S+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/;

    for (let line of input) {
        let arr = line.match(rgx);
        
        if (arr) {
            let encryptedPassword = arr[2] + arr[3] + arr[4] + arr[5];
            console.log(`Password: ${encryptedPassword}`);    
        } else {
            console.log('Try another password!');
        }   
    }
}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]  
);