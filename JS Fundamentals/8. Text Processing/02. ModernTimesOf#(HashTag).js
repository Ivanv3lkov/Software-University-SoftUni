function solve(text) {

    let specialWords =
        text.split(' ')
            .filter((word) => word.startsWith('#') && word.length > 1)
            .map((word) => word.slice(1))
            .filter((word) => word.split('').filter((c) => c.toLowerCase().charCodeAt(0) >= 97 &&
                                                           c.toLowerCase().charCodeAt(0) <= 122).length === word.length);

    console.log(specialWords.join('\n'));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');