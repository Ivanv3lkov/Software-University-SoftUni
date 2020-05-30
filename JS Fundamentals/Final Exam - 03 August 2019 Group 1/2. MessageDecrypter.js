function solve(input) {
    let rgx = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;
    input
        .shift();

    for (let line of input) {
        let arr = line.match(rgx);

        if (arr) {
            let tag = arr[2];
            let message = String.fromCharCode(arr[3]) +
            String.fromCharCode(arr[4]) + String.fromCharCode(arr[5]);
            console.log(`${tag}: ${message}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]
);

