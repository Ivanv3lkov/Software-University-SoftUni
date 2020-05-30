function solve(input) {
    let data = {};

    for (let el of input) {
        if (el === 'Results') {
            break;
        }
        let [command, firstArgument, secondArgument, thirdArgument] = el.split(':');
       
        if (command === 'Add') {
            if (!data.hasOwnProperty(firstArgument)) {
                data[firstArgument] = {
                    health: Number(secondArgument),
                    energy: Number(thirdArgument)
                };
            } else {
                data[firstArgument].health += Number(secondArgument);
            }
        } else if (command === 'Attack') {
            if (data[firstArgument] && data[secondArgument]) {
                data[secondArgument].health -= Number(thirdArgument);
                data[firstArgument].energy -= 1;
                if (data[secondArgument].health <= 0) {
                    delete data[secondArgument];
                    console.log(`${secondArgument} was disqualified!`);
                }
                if (data[firstArgument].energy === 0) {
                    delete data[firstArgument];
                    console.log(`${firstArgument} was disqualified!`);
                }
            }
        } else if (command === 'Delete') {
            if (data[firstArgument]) {
                delete data[firstArgument];
            }

            if (firstArgument === 'All') {
                data = {};
            }
        } 
    }

    let arrOfData = Object.entries(data).sort(sorting);

    function sorting(a, b) {
        return b[1].health - a[1].health || a[0].localeCompare(b[0]);
    }

    console.log(`People count: ${arrOfData.length}`);

    
    arrOfData.forEach(el => {
        console.log(`${el[0]} - ${el[1].health} - ${el[1].energy}`);
    });
}

solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
  ]
);