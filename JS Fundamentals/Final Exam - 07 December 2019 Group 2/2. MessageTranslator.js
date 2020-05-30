function solve(input) {
    input.shift();

    for (let el of input) {
        let rgx = /(!)(?<command>[A-Z][a-z]{2,})\1:\[(?<message>[A-Za-z]{8,})\]/;

        let arr = el.match(rgx);

        if (arr) {
            let ascii = '';
            for (let i = 0; i < arr.groups.message.length; i++) {
                ascii += `${arr.groups.message.charCodeAt(i)} `;
            }
            console.log(`${arr.groups.command}: ${ascii}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);