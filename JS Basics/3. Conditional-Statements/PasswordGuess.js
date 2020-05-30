function passwordGuess(input) {
    const realPassword = 's3cr3t!P@ssw0rd'
    let password = input.shift();

    if (password == realPassword) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

passwordGuess(['s3cr3t!P@ssw0rd']);