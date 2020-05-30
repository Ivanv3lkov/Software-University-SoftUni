function solve(input) {
    let passengers = Number(input.shift());
    let countStops = Number(input.shift());


    for (let i = 1; i <= countStops; i++) {
        let getOff = Number(input.shift());
        let getIn = Number(input.shift());

        passengers -= getOff;
        passengers += getIn;

        if (i % 2 == 1) {
            passengers += 2;
        } else {
            passengers -= 2;
        }
    }
    console.log(`The final number of passengers is : ${passengers}`);
}


solve([
    '20', '2', '10',
    '5', '5', '3',
    ''
]);