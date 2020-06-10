function solve(area, vol, inputJSON) {
    const objectArray = JSON.parse(inputJSON);
    console.log(objectArray);
    return objectArray.map(obj => {
        const a = Math.abs(area.call(obj));
        const v = Math.abs(vol.call(obj));
        return { area: a, volume: v};
    });
}

solve(area, vol, '[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]');