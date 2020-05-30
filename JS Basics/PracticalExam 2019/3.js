function solve(input) {
    let line = input.shift();
    let season = input.shift();

    let time = 0;

    if (season == "Winter") {
        if (line == "208") {
            time = 65 + 18;
        } else if (line == "15") {
            time = 57 + 21;
        } else if (line == "240") {
            time = 48 + 18;
        } else if (line == "Subway") {
            time = 35 + 21;
        }
    } else if (season == "Autumn") {
        if (line == "208") {
            time = 45 + 18;
        } else if (line == "15") {
            time = 42 + 21;
        } else if (line == "240") {
            time = 37 + 18;
        } else if (line == "Subway") {
            time = 35 + 21;
        }
    } else if (season == "Spring") {
        if (line == "208") {
            time = 39 + 18;
        } else if (line == "15") {
            time = 36 + 21;
        } else if (line == "240") {
            time = 31 + 18;
        } else if (line == "Subway") {
            time = 35 + 21;
        }
    } 
    
    if (season == "Summer") {
        console.log("No lectures! It's summer!");
    } else {
        console.log(`Total travel time: ${time} minutes`);
    }
}  

solve(['15', 'Summer']);