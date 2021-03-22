class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes({ recipeName, productsList }) {
        let isValid = true;
        for (let product of productsList) {
            if (this.products.indexOf(product) === -1) {
                isValid = false;
            }
        }
        if (isValid) {
            this.dishes.push({
                recipeName,
                productsList
            })
        } else {
            throw new Error('We do not have this product')
        }

        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let missingDish = false;
        for (let recipeName of this.dishes) {
            if (recipeName === dish) {
                missingDish = true
            }
        }
        if (missingDish === true) {
            throw new Error('We do not have this dish');
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let output = [];
        for (let guest in this.guests) {
            for (let dish of this.dishes) {
                if (this.guests[guest] === dish.recipeName) {
                    output.push(`${guest} will eat ${this.guests[guest]}, which consists of ${dish.productsList.join(', ')}`)
                }
            }
        }
        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());