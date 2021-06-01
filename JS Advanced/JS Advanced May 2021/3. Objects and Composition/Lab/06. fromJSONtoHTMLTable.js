function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() {
                if (car.temp < car.tempSettings) {
                    car.temp += 1;
                } else if (car.temp > car.tempSettings) {
                    car.temp -= 1;
                }
            }
        },
        hasAudio(obj) {
            obj.currentTrack = { name: obj.name, artist: obj.artist };
            obj.nowPlaying = function() {
                if (obj.currentTrack) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            };
        },
        hasParktronic(obj) {
            obj.checkDistance = function(distance) {
                if (obj.distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (0.1 <= distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (0.25 <= distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }

    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

