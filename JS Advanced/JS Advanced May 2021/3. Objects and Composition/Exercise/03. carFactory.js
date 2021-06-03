function solve(obj) {
    let car = { model: obj.model };
    let components = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    if (obj.power <= 90) {
        car.engine = components.smallEngine;
    } else if (obj.power > 90 && obj.power < 200) {
        car.engine = components.normalEngine;
    } else {
        car.engine = components.monsterEngine;
    }

    car.carriage = { type: obj.carriage, color: obj.color }
    if (obj.wheelsize % 2 === 0) {
        let wheel = Number(obj.wheelsize - 1);
        car.wheels = [wheel, wheel, wheel, wheel];
    } else {
        car.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    }

    return car;
}

console.log(solve
    (
        {
            model: 'Opel Vectra',
            power: 110,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17
        }
    ));