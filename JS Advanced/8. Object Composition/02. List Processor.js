function solve(input) {
    let arr = [];

    const actions = {
        add: (a, word) => [...a, word],
        remove: (a, word) => a.filter(w => w !== word),
        print: (a, _) =>  { console.log(a.join(',')); return a }
    }

    for (let i = 0; i < input.length; i++) {
        let [command, params] = input[i].split(' ');
       arr = actions[command](arr, params);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);