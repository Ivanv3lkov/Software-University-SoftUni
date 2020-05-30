function solve(input) {

    for (let row of input) {
        let [town, latitude, longitude] = row.split(' | ');
        let object = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(object);
    }
}

solve(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
);