function solve(input) {
    let objData = {};
    
    for (let el of input) {
        let [town, population] = el.split(' <-> ');
        population = Number(population);

        if (!objData.hasOwnProperty(town)) {
            objData[town] = population;
        } else {
            objData[town] += population;
        }
    }

    for (let key in objData) {
        console.log(`${key} : ${objData[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);