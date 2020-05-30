function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());

    let sizeCake = width * length;
    let sum = 0;
   
    let command = input.shift();

    while (command != 'STOP') {
        let piece = Number(command);
        sum += piece;

        if (sum > sizeCake) {
          console.log(`No more cake left! You need ${sum - sizeCake} pieces more.`);
            break;
        }
        command = input.shift();
    }

    if (command === 'STOP') {
        console.log(`${sizeCake - sum} pieces are left.`);
    }
}

solve([10,2,2,4,6,'STOP']);