function sumSeconds(input) {
    let timeFirst = Number(input.shift());
    let timeSecond = Number(input.shift());
    let timeThird = Number(input.shift());

    let totalTime = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds( ['35', '45', '44']);