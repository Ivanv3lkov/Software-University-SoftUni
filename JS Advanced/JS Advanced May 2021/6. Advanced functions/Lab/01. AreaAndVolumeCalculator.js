function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

let input = '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'

function solve(area, vol, input) {
    let parsedInput = JSON.parse(input);
    let output = [];
    parsedInput.forEach(obj => {
        let totalArea = area.apply(obj);
        let totalVol = vol.apply(obj)
        let result = { area: totalArea, volume: totalVol };
        output.push(result);
    });

    return output;
}
console.log(solve(area, vol, input));