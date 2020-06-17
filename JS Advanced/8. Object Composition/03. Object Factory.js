function solve(input) {
    let arr = JSON.parse(input);
    let result = {};
    
    for (let obj of arr) {
        let arrOfkeys = Object.keys(obj);
        for (let key of arrOfkeys) {
            if (!result.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
    }
        return result;   
}
console.log(solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));