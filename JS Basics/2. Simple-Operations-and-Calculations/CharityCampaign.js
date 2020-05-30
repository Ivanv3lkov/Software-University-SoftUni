function charityCampaign(input) {
    let countDays = Number(input.shift());
    let bakers = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());

    let priceCakes = cakes * bakers * countDays * 45;
    let priceWaffles = waffles * bakers * countDays * 5.80 ;
    let pricePancakes = pancakes * bakers * countDays * 3.20 ;

    let total = priceCakes + priceWaffles + pricePancakes;
    let profit = total - ( total / 8 );

    console.log(profit.toFixed(2));
}

charityCampaign(['20', '8', '14', '30', '16']);