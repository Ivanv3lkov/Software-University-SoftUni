function danceHall(input) {
    let l = Number(input.shift()); 
    let w = Number(input.shift());  
    let a = Number(input.shift()); 
    let hallSizeCm2 = (l * 100) * (w * 100);
    let wardrobeSizeCm2 = (a * 100) * (a * 100);
    let benchSizeCm2 = hallSizeCm2 / 10;
    let freeSpaceCm2 = hallSizeCm2 - wardrobeSizeCm2 - benchSizeCm2;
    let countDancers = freeSpaceCm2 / ( 40 + 7000);

    console.log(Math.floor(countDancers));

}

danceHall( ['50', '25', '2']);