function timePlusMinutes(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    let totalMin = minutes + 15;

    if (totalMin > 59) {
        hours = hours + 1;
        totalMin = totalMin - 60;
    }
    
    if (hours === 24) {
        hours = hours - 24;
    }

    if (totalMin < 10){
        console.log(`${hours}:0${totalMin}`);
    } else {
        console.log(`${hours}:${totalMin}`);
    }
}


timePlusMinutes(['23', '59']);