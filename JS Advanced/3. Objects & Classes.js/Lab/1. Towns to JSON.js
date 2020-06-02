function townsToJSON(input) {
    let towns = [];
    let regex = /\s*\|\s*/;

    for (let line of input.splice(1)) {
        let [town, latitude, longitude] = line.split(regex).filter(x => x !== '');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = { 
            Town: town, 
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        };
        towns.push(townObj);
    }
    console.log(JSON.stringify(towns));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);