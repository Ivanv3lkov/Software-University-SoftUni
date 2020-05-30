function solve(key, string) {
    key = key.toLowerCase();
    string = string.toLowerCase();

    let words = string.split(' ');

    if (words.includes(key)) {
        console.log(key);
    } else {
        console.log(`${key} not found!`);
    }
}

solve('python',
'JavaScript is the best programming language'
);