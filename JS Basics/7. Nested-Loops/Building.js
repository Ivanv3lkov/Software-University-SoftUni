function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    let resultString = "";

    for (let floor = floors; floor >= 1; floor--) {
        for (let room = 0; room < rooms; room++) {
            if (floor === floors) {
                resultString += `L${floor}${room} `;
            } else if (floor % 2 == 0) {
                resultString += `O${floor}${room} `;
            } else if (floor % 2 == 1) {
                resultString += `A${floor}${room} `;
            }
        }
        console.log(resultString);
        resultString = "";
    }
}

solve([6,4]);