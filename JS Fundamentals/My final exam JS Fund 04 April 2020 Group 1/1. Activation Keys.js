function solve(input) {
    let string = input.shift();
    let line = input.shift();
    let key = '';

    while (line !== 'Generate') {

        let [command, firstArgument, secondArgument, thirdArgument] = line.split('>>>');

        if (command === 'Contains') {
            if (string.includes(firstArgument)) {
                console.log(`${string} contains ${firstArgument}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let startIndex = Number(secondArgument);
            let endIndex = Number(thirdArgument);
            let char = string.substring(startIndex, endIndex);
            let rgx = new RegExp(char, 'g');

            if (firstArgument === 'Upper') {
                let charrUpper = char.toUpperCase();
                string = string.replace(rgx, charrUpper);
                console.log(string);
            } else if (firstArgument === 'Lower') {
                let charLower = char.toLowerCase();
                string = string.replace(rgx, charLower);
                console.log(string);
            }
        } else if (command === 'Slice') {
            let startIndex = Number(firstArgument);
            let endIndex = Number(secondArgument);
            string = string.substring(0, startIndex) + string.substring(endIndex);
            console.log(string);
        }

        line = input.shift()
    }

    console.log(`Your activation key is: ${string}`);
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
);