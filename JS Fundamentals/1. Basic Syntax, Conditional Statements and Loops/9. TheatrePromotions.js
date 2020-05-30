function theatrePromotions(typeOfday, age) {

    if (0 <= age && age <= 18) {
        if (typeOfday === 'Weekday') {
            console.log('12$');
        } else if (typeOfday === 'Weekend') {
            console.log('15$');
        } else if (typeOfday === 'Holiday') {
            console.log('5$');
        }
    } else if (18 < age && age <= 64) {
        if (typeOfday === 'Weekday') {
            console.log('18$');
        } else if (typeOfday === 'Weekend') {
            console.log('20$');
        } else if (typeOfday === 'Holiday') {
            console.log('12$');
        }
    } else if (64 < age && age <= 122) {
        if (typeOfday === 'Weekday') {
            console.log('12$');
        } else if (typeOfday === 'Weekend') {
            console.log('15$');
        } else if (typeOfday === 'Holiday') {
            console.log('10$');
        }
    } else {
        console.log('Error!');
    }
}

theatrePromotions('Weekday', -12);