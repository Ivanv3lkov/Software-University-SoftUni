function solve(input) {
    let hoursTasks = input.shift().split(' ').map(Number);

    let command = input.shift();

    while (command !== 'End') {

        let tokens = command.split(' ');

        if (tokens[0] === 'Complete') {
            let index = Number(tokens[1]);
            complete(index); 
        } else if (tokens[0] === 'Change') {
            let index = Number(tokens[1]);
            let time = Number(tokens[2]);
            change(index, time);
        } else if (tokens[0] === 'Drop') {
            let index = Number(tokens[1]);
            drop(index);
        } else if (tokens[1] === 'Completed') {
            countCompleted(hoursTasks);
        } else if (tokens[1] === 'Incomplete') {
            countIncomplete(hoursTasks)
        } else if (tokens[1] === 'Dropped') {
            countDropped(hoursTasks);
        }
        command = input.shift();
    }

    let incompletedTasks = hoursTasks.filter((n) => n > 0);
   console.log(incompletedTasks.join(' '));
   
    function complete(index) {
        if (index >= 0 && index < hoursTasks.length) {
            hoursTasks[index] = 0;
        }
    }

    function change(index, time) {
        if (index >= 0 && index < hoursTasks.length) {
            hoursTasks[index] = time;
        }
    }

    function drop(index) {
        if (index >= 0 && index < hoursTasks.length) {
            hoursTasks[index] = -1;
        }
    }

    function countCompleted(hoursTasks) {
        let counter = 0;
        for (let i = 0; i < hoursTasks.length; i++) {
            if (hoursTasks[i] === 0) {
                counter++;
            }
        }
        console.log(counter);
        
        //let completedTasks = hoursTasks.filter((n) => n === 0);
        //console.log(completedTasks.length);
    }

    function countIncomplete(hoursTasks) {
        let incompletedTasks = hoursTasks.filter((n) => n > 0);
        console.log(incompletedTasks.length);
    }

    function countDropped(hoursTasks) {
        let droppedTasks = hoursTasks.filter((n) => n < 0);
        console.log(droppedTasks.length);
    }
}

solve([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
  ]);