function solve(input) {
    let records = {};

    for (let line of input) {
        if (line === 'Log out') {
            break;
        }

        let cmd = line.split(': ');
        if (cmd[0] === 'New follower') {
            if (!records.hasOwnProperty(cmd[1])) {
                records[cmd[1]] = {
                    likes: 0,
                    comments: 0
                }
            };
        } else if (cmd[0] === 'Like') {
            if (!records.hasOwnProperty(cmd[1])) {
                records[cmd[1]] = {
                    likes: Number(cmd[2]),
                    comments: 0
                };
            } else {
                records[cmd[1]].likes += Number(cmd[2]);
            }
        } else if (cmd[0] === 'Comment') {
            if (!records.hasOwnProperty(cmd[1])) {
                records[cmd[1]] = {
                    likes: 0,
                    comments: 1
                };
            } else {
                records[cmd[1]].comments += 1;
            }
        } else if (cmd[0] === 'Blocked') {
            if (records.hasOwnProperty(cmd[1])) {
                delete records[cmd[1]];
            } else {
                console.log(`${cmd[1]} doesn't exist.`);
            }
        }
    }

    let arrOfRecords = Object.entries(records).sort(sort);

    function sort(a, b) {
        return b[1].likes - a[1].likes || a[0].localeCompare(b[0]);
    }

    console.log(`${arrOfRecords.length} followers`);
    arrOfRecords
        .forEach(el => {
            let sumLandC = el[1].likes + el[1].comments;
            console.log(`${el[0]}: ${sumLandC}`);
        });
}

solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
  ]
  
);