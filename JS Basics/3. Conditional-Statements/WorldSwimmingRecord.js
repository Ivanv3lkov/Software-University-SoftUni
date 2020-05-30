function worldRecord(input) {
    let worldRecordInSec = Number(input.shift());
    let distanceInM = Number(input.shift());
    let timeInSecFor1M = Number(input.shift());
    let timeIvanWithoutResistance = distanceInM * timeInSecFor1M;
    let resistance = Math.floor(distanceInM / 15) * 12.5;
    let timeIvan = timeIvanWithoutResistance + resistance;

    let secNeeded;
    if (worldRecordInSec > timeIvan) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan.toFixed(2)} seconds.`);
    } else {
        secNeeded = Math.abs(worldRecordInSec - timeIvan);
        console.log(`No, he failed! He was ${secNeeded.toFixed(2)} seconds slower.`)
    }
}

worldRecord(['55555.67', '3017', '5.03']);