function solve(input) {
    let lastBand = input.pop();
    let data = {};
    let cmd = input.shift();

    while (cmd !== 'start of concert') {
        let arguments = cmd.split('; ');
        let bandName = arguments[1];
        let members = arguments[2].split(', ');

        if (arguments[0] === 'Add') {
            if (!data.hasOwnProperty(bandName)) {
                data[bandName] = {
                    members,
                    time: 0
                }
            } else {
                for (let member of members) {
                    if (!(data[bandName].members).includes(member)) {
                        (data[bandName].members).push(member)
                    }
                }
            }
        } else if (arguments[0] === 'Play') {
            if (data[bandName]) {
                data[bandName].time += Number(arguments[2]);
            } else {
                data[bandName] = {
                    members: [],
                    time: Number(arguments[2])
                }
            }
        }

        cmd = input.shift();
    }

   let arr = Object.entries(data).sort(sort);
      
   function sort(a, b) {
    return b[1].time - a[1].time || a[0].localeCompare(b[0]);
   }
   let totalTime = 0;

   arr.forEach(el => {
    totalTime += Number(el[1].time);
   })
   console.log(`Total time: ${totalTime}`);
   
   arr.forEach(el => {
       console.log(`${el[0]} -> ${el[1].time}`);
   })

   console.log(lastBand);
   data[lastBand].members.forEach(el => {
       console.log(`=> ${el}`);
   })
}

solve([
    'Play; The Beatles; 2584',
    'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
    'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
    'Play; Eagles; 1869',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
    'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
    'Play; The Rolling Stones; 4239',
    'start of concert',
    'The Rolling Stones'
]
);