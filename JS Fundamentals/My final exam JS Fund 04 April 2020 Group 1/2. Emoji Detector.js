function solve(input) {
    let rgxNumbers = /\d/g;
    let coolTresholdSum = input[0].match(rgxNumbers).map(Number).reduce((val, acc) => val * acc);

    let rgxEmojis = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;

    let match = rgxEmojis.exec(input[0]);
    let arrEmojis = [];
    let countEmojis = 0;
    

    while (match !== null) {
        countEmojis++;
        let sum = 0;

        for (let i = 0; i < match.groups.emoji.length; i++) {
            let ascii = match.groups.emoji.charCodeAt(i);
            sum += ascii;
        }

        if (sum > coolTresholdSum) {
            arrEmojis.push(match[0]);
        }

        match = rgxEmojis.exec(input[0]);
    }

    console.log(`Cool threshold: ${coolTresholdSum}`);
    console.log(`${countEmojis} emojis found in the text. The cool ones are:`);
    for (let emoji of arrEmojis ) {
        console.log(emoji);
    }
}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]
);