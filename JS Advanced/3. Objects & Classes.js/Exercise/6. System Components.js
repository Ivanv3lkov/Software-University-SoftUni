function solve(input) {
    let data = {};

    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');

        if (!data.hasOwnProperty(system)) {
            data[system] = {};
        }

        if (!data[system].hasOwnProperty(component)) {
            data[system][component] = [];
        }

        data[system][component].push(subcomponent);
    }

    Object.entries(data).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    }).forEach(([system, component]) => {
        console.log(system);
        Object.entries(component)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(([name, sub]) => {
                console.log('|||' + name);
                sub.forEach(s => {
                    console.log('||||||' + s);
                })
            });
    });
}


solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);