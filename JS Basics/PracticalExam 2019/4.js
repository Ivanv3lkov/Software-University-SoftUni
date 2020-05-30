function solve(input) {
    let trunkCapacity = Number(input.shift());
    let entry = input.shift();

    let counter = 0;

    while (entry != "End") {
        let suitcaseArea = Number(entry);
        counter++;

        if (counter % 3 == 0) {
            suitcaseArea *= 1.10;
        }

        if (trunkCapacity < suitcaseArea) {
            console.log("No more space!");
            console.log(`Statistic: ${--counter} suitcases loaded.`);
            break;
        }
        
        trunkCapacity -= suitcaseArea

        entry = input.shift();
    }

    if (entry == "End") {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter} suitcases loaded.`);
    }
}

solve(['550', '100', '252', '72', 'End']);