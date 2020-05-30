function solve(input) {

    let arr = input.shift().split(' ').map(Number);

    for (let el of input) {
        let [command, firstNum, secondNum] = el.split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        if (command === 'Add') {
            add(firstNum);
        } else if (command === 'Remove') {
            remove(firstNum);
        } else if (command === 'RemoveAt') {
            removeAt(firstNum);
        } else {
            insert(firstNum, secondNum);
        }
    }

    console.log(arr.join(' '));
    
    function add(number) {
        arr.push(number);
    }

    function remove(number) {
       arr = arr.filter(el => el !== number);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(number, index) {
        arr.splice(index, 0, number);
    }
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);


