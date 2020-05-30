function solve(input) {
    let result = [];

    for (let i = 1; i <= input.length; i++) {
        let command = input[i - 1];

        if (command === 'add') {
            result.push(i);
        } else {
            result.pop();
        }
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
