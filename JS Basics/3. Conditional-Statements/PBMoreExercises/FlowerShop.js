function flowerShop(input) {
    const priceM = 3.25; // Магнолии 
    const priceZ = 4; //  Зюмбюли 
    const priceR = 3.50; // Рози 
    const priceK = 8; // Кактуси 

    let countM = Number(input.shift());
    let countZ = Number(input.shift());
    let countR = Number(input.shift());
    let countK = Number(input.shift());
    let priceGift = Number(input.shift());

    let profit = ((priceM * countM) + (priceZ * countZ) + (priceR * countR) + (priceK * countK)) * 0.95;
    let diff = Math.abs(priceGift - profit);

    if(priceGift <= profit) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

flowerShop(['15','7','5','10','100']);