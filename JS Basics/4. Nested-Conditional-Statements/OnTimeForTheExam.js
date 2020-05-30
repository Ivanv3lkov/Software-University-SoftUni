function solve(input) {
    let examHours = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arrivalHours = Number(input.shift());
    let arrivalMinutes = Number(input.shift());

    let examInMinutes = examHours * 60 + examMinutes;
    let arrivalInMinutes = arrivalHours * 60 + arrivalMinutes;

    let finalMinutes = Math.abs(examInMinutes - arrivalInMinutes);
    let hours = Math.floor(finalMinutes / 60);
    let minutes = finalMinutes % 60;

    if (arrivalInMinutes > examInMinutes) {
        console.log('Late');
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
        } else if (hours > 0 && minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`)
        } else if (hours > 0 && minutes >= 10) {
            console.log(`${hours}:${minutes} hours after the start`)
        }
    } else if ((examInMinutes == arrivalInMinutes) || (arrivalInMinutes >= examInMinutes - 30 && arrivalInMinutes < examInMinutes)) {
        console.log('On time');
        if (arrivalInMinutes >= examInMinutes - 30 && arrivalInMinutes < examInMinutes) {
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (hours == 0) {
            console.log(`${minutes} minutes before the start`);
        } else if (hours > 0 && minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`)
        } else if (hours > 0 && minutes >= 10) {
            console.log(`${hours}:${minutes} hours before the start`)
        }
    }
}

solve(['9','30','9','50']);

