function firm(input) {
    let hoursNeeded = Number(input.shift());
    let availableDays = Number(input.shift());
    let employees = Number(input.shift());

    let hoursForWork = (availableDays * 0.90) * 8;
    let overTimeWork = employees * (2 * availableDays);
    let totalHours = Math.floor(hoursForWork + overTimeWork);
    let diff = Math.abs(hoursNeeded - totalHours);

    if (hoursNeeded <= totalHours) {
        console.log(`Yes!${Math.floor(diff)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.floor(diff)} hours needed.`);
    }
}
firm(['99','3','1']);
