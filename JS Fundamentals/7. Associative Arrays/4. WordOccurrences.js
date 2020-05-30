function solve(input) {
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let word = input[i];

        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1)
        }
    }
    
    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

    let result = new Map(sorted);

    for (let [word, count] of result) {
        console.log(`${word} -> ${count} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
]);