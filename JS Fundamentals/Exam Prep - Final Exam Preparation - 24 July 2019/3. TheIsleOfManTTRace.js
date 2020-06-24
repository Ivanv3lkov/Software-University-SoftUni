function solve(input) {
    let pattern = /([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;
    let decrypted = '';

    for (let j = 0; j < input.length; j++) {
        let result = pattern.exec(input[j]);
        if (result) {
            let len = Number(result.groups.length);
            if (result.groups.code.length === len) {
                for (let i = 0; i < result.groups.code.length; i++) {
                    decrypted += String.fromCharCode(result.groups.code.charCodeAt(i) + len);
                }
                console.log(`Coordinates found! ${result.groups.name} -> ${decrypted}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}

solve([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]
);