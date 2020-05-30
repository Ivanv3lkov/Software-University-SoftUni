function fishland(input) {
let priceSkumria = Number(input.shift()); 
let priceCaca = Number(input.shift()); 
let palamudKg = Number(input.shift()); 
let safridKg = Number(input.shift()); 
let midiKg = Number(input.shift()); 

let palamudPrice = priceSkumria * 1.60;
let safridPrice = priceCaca * 1.80;
let midiPrice = 7.5;

let sum = (palamudKg * palamudPrice) + (safridKg * safridPrice) + (midiKg * midiPrice);

console.log(sum.toFixed(2));
}

fishland(['5.55',
3.57,
4.3,
3.6,
7,
]);