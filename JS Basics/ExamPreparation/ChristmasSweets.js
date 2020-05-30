function solve(input) {
    let baklavaPrice = Number(input.shift());
    let mufiniPrice = Number(input.shift())
    let shtolenKg = Number(input.shift());
    let bonboniKg = Number(input.shift());
    let biskvitiKg = Number(input.shift());

    let priceShtolen = baklavaPrice + baklavaPrice * 0.6;
    let bonboniPrice = mufiniPrice + mufiniPrice * 0.8;
    let biskvitiPrice = 7.5;

    let totalSum = shtolenKg * priceShtolen + bonboniKg * bonboniPrice + biskvitiKg * biskvitiPrice;

    console.log(totalSum.toFixed(2));

}

solve(['6.90', '4.20', '1.5', '2.5', '1']);