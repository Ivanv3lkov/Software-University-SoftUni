function solve(input) {
    input.shift();
    let registrations = input;
    let count = 0;

    for (let registration of registrations) {
        let rgx = /^(U\$)(?<username>[A-Z][a-z]{2,})\1(\P\@\$)(?<password>[A-Za-z]{5,}(\d+)+)\3$/;

        let arr = registration.match(rgx);

        if (arr) {
            console.log('Registration was successful');
            console.log(`Username: ${arr.groups.username}, Password: ${arr.groups.password}`);
            count++;
        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${count}`);
}

solve([
  '3',
  'U$MichaelU$P@$asdqwe123P@$',
  'U$NameU$P@$PasswordP@$',
  'U$UserU$P@$ad2P@$'
]
);