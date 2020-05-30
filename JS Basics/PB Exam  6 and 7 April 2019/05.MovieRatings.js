function solve(input) {
    let moviesCount = Number(input.shift());
  
    let maxMovieRate = Number.MIN_SAFE_INTEGER;
    let minMovieRate = Number.MAX_SAFE_INTEGER;
    let counterMovies = 0;
    let totalRating = 0;
    let maxMovieName = "";
    let minMovieName = "";

    for (let i = 0; i < moviesCount; i++) {
        let movieName = input.shift();
        let movieRate = Number(input.shift());
  
        counterMovies++;
        totalRating += movieRate;

        if (movieRate > maxMovieRate) {
            maxMovieRate = movieRate;
            maxMovieName = movieName;
        }

        if (movieRate < minMovieRate) {
            minMovieRate = movieRate;
            minMovieName = movieName;
        }

    }

    console.log(`${maxMovieName} is with highest rating: ${maxMovieRate.toFixed(1)}`);
    console.log(`${minMovieName} is with lowest rating: ${minMovieRate.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating / counterMovies).toFixed(1)}`);
}

solve([
    '5', 'A Star is Born',
    '7.8', 'Creed 2',
    '7.3', 'Mary Poppins',
    '7.2', 'Vice',
    '7.2', 'Captain Marvel',
    '7.1']);