function solve(input) {
    let capacity = Number(input.shift());
    let data = {};

    for (let el of input) {
        if (el === 'Statistics') {
            break;
        }
        let cmd = el.split('=');

        if (cmd[0] === 'Add') {
            if (!data.hasOwnProperty(cmd[1])) {
                data[cmd[1]] = {
                    sent: Number(cmd[2]),
                    received: Number(cmd[3])
                };
            }
        } else if (cmd[0] === 'Message') {
            if (data[cmd[1]] && data[cmd[2]]) {
                data[cmd[1]].sent++;
                data[cmd[2]].received++;

                if (data[cmd[1]].sent + data[cmd[1]].received === capacity) {
                    delete data[cmd[1]];
                    console.log(`${cmd[1]} reached the capacity!`);
                }

                if (data[cmd[2]].sent + data[cmd[2]].received === capacity) {
                    delete data[cmd[2]];
                    console.log(`${cmd[2]} reached the capacity!`);
                }
            }
        } else if (cmd[0] === 'Empty') {
            if (cmd[1] === 'All') {
                data = {};
            } else {
                delete data[cmd[1]];
            }
        }
    }

   let arr = Object.entries(data).sort(comparator);
    
    function comparator(a, b) {
      return b[1].received - a[1].received || a[0].localeCompare(b[0]);
    }
    
    console.log(`Users count: ${arr.length}`);
    arr.forEach(el => {
        console.log(`${el[0]} - ${el[1].sent + el[1].received}`);
    });
}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]
);