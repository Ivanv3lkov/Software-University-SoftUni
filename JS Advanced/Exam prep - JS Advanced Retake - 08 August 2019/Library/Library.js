class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        };

        let foundSubscriber = this.subscribers.find(s => s.name === name);

        if (!foundSubscriber) {
            this.subscribers.push({
                name,
                type,
                books: []
            });
        } else {
            foundSubscriber.type = type;
        }
        return foundSubscriber ? foundSubscriber : this.subscribers[this.subscribers.length - 1];
    }

    unsubscribe(name) {
        let subscriberIndex = this.subscribers.findIndex(s => s.name === name);

        if (subscriberIndex === -1) {
            throw new Error(`There is no such subscriber as ${name}`);
        } else {
            this.subscribers.splice(subscriberIndex, 1);
        }
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        let foundSubscriber = this.subscribers.find(s => s.name === subscriberName);

        if (!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        } else {
            let subType = foundSubscriber.type;
            let subTypeLimit = this.subscriptionTypes[subType];

            if (foundSubscriber.books.length >= subTypeLimit) {
                throw new Error(`You have reached your subscription limit ${subTypeLimit}!`);
            }

            foundSubscriber.books.push({ title: bookTitle, author: bookAuthor });
        }
        return foundSubscriber;
    }

    showInfo() {
        if (!this.subscribers.length) {
            return `${this.libraryName} has no information about any subscribers`;
        }

        return this.subscribers
            .map(s => {
                let booksOutput = s.books.map(b => `${b.title} by ${b.author}`).join(', ');

                return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`;
            }).join('\n')
    }
}



