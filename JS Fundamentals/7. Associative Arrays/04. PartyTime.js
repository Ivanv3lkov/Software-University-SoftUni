function solve(input) {
    let guests = {
        vip: [],
        regular: []
    };

    let index = input.indexOf('PARTY');
    let invites = input.slice(0, index);
    let party = input.slice(index + 1);

    for (let guest of invites) {
        if (isRegular(guest)) {
            guests['regular'].push(guest)
        } else {
            guests['vip'].push(guest);
        }
    }
    
    for (let guest of party) {
        if (isRegular(guest)) {
            let indexOfRegular = guests['regular'].indexOf(guest);

            guests['regular'].splice(indexOfRegular, 1);
        } else {
            let indexOfVip = guests['vip'].indexOf(guest);

            guests['vip'].splice(indexOfVip, 1);
        }
    }

    let output =  guests['vip'].concat(guests['regular']);
    console.log(output.length);
    console.log(output.join('\n'));
    
    function isRegular(guest) {
        let firstSymbol = Number(guest[0]);

        return isNaN(firstSymbol);
    }
}

solve(
    ['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)