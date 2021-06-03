function solve(input) {
    let result = [];
    return input.map(line => line.split(' / ')).reduce((acc, currEl) => {
        currEl[2] = currEl[2] ? currEl[2].split(', ') : [];   
        acc = {
            name: currEl[0],
            level: Number(currEl[1]),
            items: currEl[2]
        }
        result.push(acc);
        return JSON.stringify(result);
    }, result);
}

console.log(solve(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    
));