function solve(input) {
    let sizeOfASide = Number(input.shift());
    let numberOfSheets = Number(input.shift());
    let AreaASingleSheet = Number(input.shift());

    let areaForCover = sizeOfASide * sizeOfASide * 6;
    let possibleCoverArea = 0;

    for (let i = 1; i <= numberOfSheets; i++) {

        if (i % 3 === 0) {
            possibleCoverArea += AreaASingleSheet * 0.25;
        } else {
            possibleCoverArea += AreaASingleSheet;
        }
    }

    let result =  possibleCoverArea / areaForCover * 100;

    console.log(`You can cover ${result.toFixed(2)}% of the box.`);
}

solve(['2.5', '32', '4.25']);