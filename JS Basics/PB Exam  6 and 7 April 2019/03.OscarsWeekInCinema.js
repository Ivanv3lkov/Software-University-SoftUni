function solve(input) {
    let movieName = input.shift();
    let hallType = input.shift();
    let ticketsCount = Number(input.shift());

    let income = 0;

    if (movieName == "A Star Is Born") {
        if (hallType == "normal") {
            income = ticketsCount * 7.50;
        } else if (hallType == "luxury") {
            income = ticketsCount * 10.50;
        } else if (hallType == "ultra luxury") {
            income = ticketsCount * 13.50;
        }
    } else if (movieName == "Bohemian Rhapsody") {
        if (hallType == "normal") {
            income = ticketsCount * 7.35;
        } else if (hallType == "luxury") {
            income = ticketsCount * 9.45;
        } else if (hallType == "ultra luxury") {
            income = ticketsCount * 12.75;
        }
    } else if (movieName == "Green Book") {
        if (hallType == "normal") {
            income = ticketsCount * 8.15;
        } else if (hallType == "luxury") {
            income = ticketsCount * 10.25;
        } else if (hallType == "ultra luxury") {
            income = ticketsCount * 13.25;
        }
    } else if (movieName == "The Favourite") {
        if (hallType == "normal") {
            income = ticketsCount * 8.75;
        } else if (hallType == "luxury") {
            income = ticketsCount * 11.55;
        } else if (hallType == "ultra luxury") {
            income = ticketsCount * 13.95;
        }
    }
    console.log(`${movieName} -> ${income.toFixed(2)} lv.`);
}

solve(["A Star Is Born", "luxury", "42"]);