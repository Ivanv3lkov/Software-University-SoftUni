function solve(arrOfStrings) {
    let output = {};

    for (let str of arrOfStrings) {
        let [town, population] = str.split(' <-> ');
        if (output.hasOwnProperty(town)) {
            output[town] += Number(population);
        } else {
            output[town] = Number(population);
        }
    }

   for (let key in output) {
       console.log(`${key} : ${output[key]}`);
   }
}

console.log(solve(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
    ]
));