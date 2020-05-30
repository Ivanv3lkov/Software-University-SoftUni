function solve(input) {
    let rgx = /\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/;
    input
        .shift();

    input
        .forEach(el => {
            let arr = el.match(rgx);


            if (arr) {
                console.log(`${arr[1]}, The ${arr[2]}`);
                console.log(`>> Strength: ${arr[1].length}`);
                console.log(`>> Armour: ${arr[2].length}`);
            } else {
                console.log('Access denied!');
            }
        });
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
]
);