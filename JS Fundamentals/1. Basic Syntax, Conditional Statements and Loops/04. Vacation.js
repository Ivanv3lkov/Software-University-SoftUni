function vacation(groupSize, type, dayOfWeek) {
    let ticketPrice = 0;

    switch (type) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                ticketPrice = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                ticketPrice = 9.80;
            } else {
                ticketPrice = 10.46;
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                ticketPrice = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                ticketPrice = 15.60;
            } else {
                ticketPrice = 16;
            }
            
            if (groupSize >= 100) {
                groupSize -= 10;
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                ticketPrice = 15;
            } else if (dayOfWeek === 'Saturday') {
                ticketPrice = 20;
            } else {
                ticketPrice = 22.50;
            }
            break;
    }

    let totalPrice = groupSize * ticketPrice;

    if (type === 'Students' && groupSize >= 30) {
        totalPrice *= 0.85;
    }

    if (type === 'Regular' && (groupSize >= 10 && groupSize <= 20)) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");