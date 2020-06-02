function sumByTown(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+= 2) {
        let town = input[i];
        let income = Number(input[i + 1]);

        if (!obj.hasOwnProperty(town)) {
            obj[town] = income;  
        } else {
            obj[town] += income;
        }
    }
        return JSON.stringify(obj)
}

console.log(sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4']));