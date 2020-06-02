function solve(input) {
    let obj = {};

    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!obj.hasOwnProperty(carBrand)) {
            obj[carBrand] = {};
            obj[carBrand][carModel] = producedCars;
        } else {
            if (!obj[carBrand].hasOwnProperty(carModel)) {
                obj[carBrand][carModel] = producedCars;
            } else {
                obj[carBrand][carModel] += producedCars;
            }
        }
    }
    let arr = Object.keys(obj);

    for (let key of arr) {
        console.log(key);
        let arrOfmodels = Object.keys(obj[key]);
        for (let model of arrOfmodels) {
            console.log(`###${model} -> ${obj[key][model]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);