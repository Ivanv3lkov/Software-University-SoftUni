function solve(...input) {
    let number = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        let numObj = {
            chop: num => num / 2,
            dice: num => Math.sqrt(num),
            spice: num => num + 1,
            bake: num => num * 3,
            fillet: num => num * 0.80
        }

        if (numObj.hasOwnProperty(command)) {
            console.log(numObj[command](number));
            number = numObj[command](number)
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');