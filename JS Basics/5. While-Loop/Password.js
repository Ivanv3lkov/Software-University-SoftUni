function password(input) {
    let username = input.shift();
    let password = input.shift();

    let data = input.shift();

    while (password !== data) {
        data = input.shift();

    }

    console.log(`Welcome ${username}!`);

}

password(['Nakov', '1234','pass','1324','1234']);