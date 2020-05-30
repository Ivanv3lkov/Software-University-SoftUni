function solve(input) {
    let movieCount = Number(input.shift());

    let sumRate = 0;
    let counterMovies = 0;
    let maxRate = Number.MIN_SAFE_INTEGER;
    let minRate = Number.MAX_SAFE_INTEGER;
    let maxRateMovie = "";
    let minRateMovie = ""

    for (let i = 0; i < movieCount; i++) {
        let movieName = input.shift();
        let rate = Number(input.shift());
        counterMovies++
        sumRate += rate;

        if (rate > maxRate) {
            maxRate = rate;
            maxRateMovie = movieName;
        }

        if (rate < minRate) {
            minRate = rate;
            minRateMovie = movieName;
        }

    }

    console.log(`${maxRateMovie} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${minRateMovie} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${(sumRate / counterMovies).toFixed(1)}`);
}

solve([
    '5', 'A Star is Born',
    '7.8', 'Creed 2',
    '7.3', 'Mary Poppins',
    '7.2', 'Vice',
    '7.2', 'Captain Marvel',
    '7.1']);