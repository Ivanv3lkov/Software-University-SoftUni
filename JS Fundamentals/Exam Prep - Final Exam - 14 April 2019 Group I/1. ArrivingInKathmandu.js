function solve(input) {
    let line = input.shift();

    while (line !== 'Last note') {
        let pattern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
        let result = line.match(pattern);
        
        if (result) {
            let lenCode = Number(result[2]);
            let geohashcode = result[3];
            if (lenCode === geohashcode.length) {
                let nameOfMountain = result[1].replace(/[!@#$?]+/g, '');
                console.log(`Coordinates found! ${nameOfMountain} -> ${geohashcode}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }

        line = input.shift();
    }
}

solve([
    '!@Ma?na?sl!u@=7<<tv58ycb4845',
    'E!ve?rest=.6<<tuvz26',
    '!K@2.,##$=4<<tvnd',
    '!Shiha@pan@gma##9<<tgfgegu67',
    '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
    'Last note'
]
);