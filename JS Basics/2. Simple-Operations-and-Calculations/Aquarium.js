function aquarium(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());
    let oneLiterToOnedm3 = 0.001;
    let realPercent = percent * 0.01;
    let aquariumVolume = lenght * width * height;
    let totalLiters = aquariumVolume * oneLiterToOnedm3;
    let necessaryLiters = totalLiters * (1 - realPercent );
    
    console.log(necessaryLiters.toFixed(3));

}

aquarium( ["105", "77", "89", "18.5"]);