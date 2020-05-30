function solve(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let validNames = input[0].match(pattern);

    console.log(validNames.join(' '));
}

solve(
    [
        'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
    ]
);
