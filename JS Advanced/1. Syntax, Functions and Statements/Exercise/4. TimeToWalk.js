function solve(steps, footprintInMeters, speedInKm) {
    let distance = steps * footprintInMeters;
    let time = Math.round(distance / speedInKm * 3.6);
    time += Math.floor(distance / 500) * 60;

    let seconds = time % 60;
    time -= seconds;
    let minutes = (time / 60) % 60;
    time -= minutes * 60;
    let hours = time / 3600;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        return ('0' + num).slice(-2);
    }
}
solve(4000, 0.60, 5);
