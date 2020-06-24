function solve(input) {
    let rgx = /([*@])([A-Z][a-z]{2,})\1: \[(\w)]\|\[(\w)]\|\[(\w)]\|$/;

    input.shift();

    input
        .forEach(el => {
            let arr = el.match(rgx);
            
            if (arr) {
                let tag = arr[2];
                let first = arr[3].charCodeAt();
                let second = arr[4].charCodeAt();
                let third = arr[5].charCodeAt();
                console.log(`${tag}: ${first} ${second} ${third}`);
            } else {
                console.log('Valid message not found!');
            }
        });
}

solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]
);