function smallShop(input) {
    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let sum;

    if (city == 'Sofia') {
        if (product == 'coffee') {
            sum = quantity * 0.50;
        } else if (product == 'water') {
            sum = quantity * 0.80;
        } else if (product == 'beer') {
            sum = quantity * 1.20;
        } else if ( product == 'sweets') {
            sum = quantity * 1.45;
        } else {
            sum = quantity * 1.60;
        }
    } else if (city == 'Plovdiv') {
        if (product == 'coffee') {
            sum = quantity * 0.40;
        } else if (product == 'water') {
            sum = quantity * 0.70;
        } else if (product == 'beer') {
            sum = quantity * 1.15;
        } else if ( product == 'sweets') {
            sum = quantity * 1.30;
        } else {
            sum = quantity * 1.50;
        }
    } else {
        if (product == 'coffee') {
            sum = quantity * 0.45;
        } else if (product == 'water') {
            sum = quantity * 0.70;
        } else if (product == 'beer') {
            sum = quantity * 1.10;
        } else if ( product == 'sweets') {
            sum = quantity * 1.35;
        } else {
            sum = quantity * 1.55;
        }
    }  
    console.log(sum);
}

smallShop(['beer', 'Sofia', '6']);