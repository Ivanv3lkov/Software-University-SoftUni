function weatherForcast(input) {
    let weather = input.shift();

    if (weather.toLowerCase() == 'sunny') {
        console.log("It's warm outside!")
    } else {
        console.log("It's cold outside!");
    }
}

weatherForcast(['suNNwindyy']);

