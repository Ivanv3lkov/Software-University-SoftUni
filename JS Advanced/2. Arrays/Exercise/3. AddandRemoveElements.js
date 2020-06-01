function solve(input) {
    let arr = [];
    let x = 1;

    let obj = {
        add: (x) => arr.push(x),
        remove: () => arr.pop()
    }

    for (let command of input) {
        obj[command](x);
        x++;
    }

    if (arr.length === 0) {
        console.log('Empty');
    }

    console.log(arr.join('\n'));
}
solve(['remove', 
'remove', 
'remove']
);