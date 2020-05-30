function solve(input) {
    let line = input.shift();
    let mappedSong = [];

    while (line !== 'end') {
        let pattern = /^([A-Z][a-z'\s]+):([A-Z][A-Z\s]+[A-Z])$/gm;
        let result = pattern.exec(line);

        if (result) {
            let [artist, song] = line.split(':');
            let len = artist.length;

            for (let i = 0; i < len; i++) {
                let currentChar = artist.charCodeAt(i);
                let newChar = currentChar + len;

                if (currentChar === 32) {
                    mappedSong.push(' ');
                    continue;
                }

                if (currentChar === 39) {
                    mappedSong.push("'");
                    continue;
                }

                if (i !== 0) {
                    if (newChar > 122) {
                        let calcChar = newChar - 122;
                        let calcCharFinal = 96 + calcChar;
                        newChar = calcCharFinal;
                    }
                } else if (newChar > 90) {
                    let calcChar = newChar - 90;
                    let calcCharFinal = 65 + calcChar;
                    newChar = calcChar;
                }

                let mappedChar = String.fromCharCode(newChar);
                mappedSong.push(mappedChar);
            }

            mappedSong.push('@');

            let lenSong = song.length;

            for (let i = 0; i < lenSong; i++) {
                let currentChar = song.charCodeAt(i);
                let newChar = currentChar + len;

                if (currentChar === 32) {
                    mappedSong.push(' ');
                    continue;
                }

                if (currentChar === 39) {
                    mappedSong.push("'");
                    continue;
                }

                if (newChar > 90) {
                    let calcChar = newChar - 90;
                    let calcCharFinal = 64 + calcChar;
                    newChar = calcCharFinal;
                }

                let mappedChar = String.fromCharCode(newChar);
                mappedSong.push(mappedChar);

            }
        }

        if (mappedSong.join('') === '') {
            console.log(`Invalid input!`)
        } else {
            console.log(`Successful encryption: ${mappedSong.join('')}`);
        }

        mappedSong = [];
        line = input.shift();
    }
}

solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]
);