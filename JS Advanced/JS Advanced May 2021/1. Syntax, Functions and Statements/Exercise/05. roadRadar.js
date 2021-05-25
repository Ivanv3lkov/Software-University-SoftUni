function roadRadar(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let printMessage = (speed, limit) => {
        if (speed > limit) {
            diff = speed - limit;
            if (diff <= 20) {
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`); 
            } else if (diff > 20 && diff <= 40) {
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`);
            } else {
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`);
            }
        } else if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    }
    printMessage(speed, limits[area]);
}

roadRadar(60, 'city');