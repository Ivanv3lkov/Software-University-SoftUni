class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let isClient = this.allCustomers.find(c => c.personalId === customer.personalId);

        if (isClient) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            customer.totalMoney = 0;
            customer.transactions = [];
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            customer.totalMoney += amount;
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

            return `${customer.totalMoney}$`
        }
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else if (customer.totalMoney < amount) {
            throw new Error (`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        } else {
            customer.totalMoney -= amount;
            customer.transactions.unshift(`${customer.transactions.length + 1}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);
            return `${customer.totalMoney}$`
        }
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } else {
            return [
                `Bank name: ${this._bankName}`,
                `Customer name: ${customer.firstName} ${customer.lastName}`,
                `Customer ID: ${personalId}`,
                `Total Money: ${customer.totalMoney}$`,
                `Transactions:`
            ].concat(customer.transactions).join('\n');
        }
    }
}




