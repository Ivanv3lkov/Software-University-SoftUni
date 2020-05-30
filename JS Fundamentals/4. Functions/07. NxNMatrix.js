function matrix(number) {

    function repeats(a) {
        return (`${a} `).repeat(a);
    }

    for (let i = 0; i < number; i++) {
        console.log(repeats(number));  
    }
}

matrix(8);