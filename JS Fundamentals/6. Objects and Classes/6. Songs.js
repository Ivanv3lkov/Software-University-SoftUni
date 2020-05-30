function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        };
    }

    let n = Number(input.shift());
    let songs = [];

    for (let i = 0; i < n; i++) {
        let currentInput = input.shift();
        let [typeList, name, time] = currentInput.split('_');

        let song = new Song(typeList, name, time);
        
        songs.push(song);
    }

    let wantedList = input.shift();

    for (const song of songs) {
        if (song.typeList === wantedList || wantedList === 'all') {
            console.log(song.name);
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);