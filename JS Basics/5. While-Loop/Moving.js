function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let space = width * length * height;
    let boxes = 0;

    let line = input.shift();

    while (line !== 'Done') {
        let box = Number(line);
        boxes += box;

        if (boxes > space) {
            console.log(`No more free space! You need ${boxes - space} Cubic meters more.`);
            break;
        }
        line = input.shift();
    }
    if (line == 'Done') {
        console.log(`${space - boxes} Cubic meters left.`);
    }
}


solve(['10', '10', '2', '20', '20', '20', '20', '122']);