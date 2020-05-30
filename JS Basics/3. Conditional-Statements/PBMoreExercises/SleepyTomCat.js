function tomCat(input) {
    let weekends = Number(input.shift());

    let tomNorm = 30000;
    let workingDays = 365 - weekends;
    let realTimeForPlaying = (workingDays * 63) + (weekends * 127);
    let diffNorm = Math.abs(tomNorm - realTimeForPlaying);
    let hours = Math.floor(diffNorm / 60);
    let minutes = diffNorm % 60;

    if (tomNorm > realTimeForPlaying) {
        console.log('Tom sleeps well');
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    } else {
        console.log('Tom will run away');
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }

}
tomCat(['20']);