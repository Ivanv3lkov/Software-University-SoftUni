function solve(input) {
    let line = input.shift();
    let obj = {};

    while (line !== 'End') {

        let [city, population, gold] = line.split('||');
        let [command, town, peopleCount, stolenGoldCount] = line.split('=>');

        if (population) {
            if (!obj[city]) {
                obj[city] = {
                    population: Number(population),
                    gold: Number(gold)
                }
            } else {
                obj[city].population += Number(population),
                    obj[city].gold += Number(gold)
            }
        } else {
            if (command === 'Plunder') {
                obj[town].population -= Number(peopleCount);
                obj[town].gold -= Number(stolenGoldCount);
                console.log(`${town} plundered! ${stolenGoldCount} gold stolen, ${peopleCount} citizens killed.`);
                
                if (obj[town].population === 0 || obj[town].gold === 0) {
                    delete obj[town];
                    console.log(`${town} has been wiped off the map!`);
                }
            } else if (command === 'Prosper') {
                let goldGrowth = Number(peopleCount);
                if (goldGrowth > 0) {
                    obj[town].gold += Number(goldGrowth);
                    console.log(`${goldGrowth} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
                } else {
                    console.log('Gold added cannot be a negative number!');
                }
            }
        }

        line = input.shift()
    }

    let arr = Object.entries(obj).sort(sort);

    function sort(a, b) {
        return b[1].gold - a[1].gold || a[0].localeCompare(b[0]);
    }
    if (arr.length > 0) {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);
        for (let el of arr) {
            let town = el[0];
            let population = el[1].population;
            let gold = el[1].gold;
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
  ]
  

);