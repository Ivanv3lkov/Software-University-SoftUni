function solve(integers, commands) {

    for (let el of commands) {
        if (el === 'print') {
            break;
        }

        let tokens = el.split(' ');
        let command = tokens[0];

        if (command === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2])
            add(index, element);
        } else if (command === 'addMany') {
            let index = Number(tokens[1]);
            let elements = tokens.slice(2).map(Number);
            addMany(index, elements);
        } else if (command === 'contains') {
            let element = Number(tokens[1]);
            contains(element);
        } else if (command === 'remove') {
            let index = Number(tokens[1]);
            remove(index);
        } else if (command === 'shift') {
            let positions = Number(tokens[1]);
            shift(positions);
        } else if (command === 'sumPairs') {
          integers = sumPairs(integers);
        }
    }
    console.log(`[ ${integers.join(', ')} ]`);

    function add(index, element) {
        integers.splice(index, 0, element);
    }

    function addMany(index, elements) {
        for (let i = 0; i < elements.length; i++) {
            let el = elements[i];
            integers.splice(index++, 0, el);
        }
    }

    function contains(element) {
        let indexOfEl = integers.indexOf(element);
        console.log(indexOfEl);
    }

    function remove(index) {
        integers.splice(index, 1);
    }

    function shift(positions) {
        for (let i = 0; i < positions; i++) {
            integers.push(integers.shift());
        }
    }

    function sumPairs(integers) {
        let output = [];
        while (integers.length > 0) {
            let a = integers.shift() || 0;
            let b = integers.shift() || 0;
            output.push(a + b);
        }

        integers = output.slice(0);
        return integers;
    }
}

solve([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);