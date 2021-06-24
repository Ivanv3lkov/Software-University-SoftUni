class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (value === true) {
            let titleDivElements = Array.from(document.querySelectorAll('.title'));

            for (const el of titleDivElements) {
                if (el.textContent.startsWith(`${this.firstName} ${this.lastName}`)) {
                    el.classList.add('online');
                }
            }
        } else if (value === false) {
            let titleDivElements = Array.from(document.querySelectorAll('.title'));
            for (const el of titleDivElements) {
                if (el.textContent.startsWith(`${this.firstName} ${this.lastName}`)) {
                    el.classList.remove('online');
                }
            }
        }

        this._online = value;
    }

    render(id) {
        let articleElement = document.createElement('article');

        let divTitleElement = document.createElement('div');
        divTitleElement.classList.add('title');
        divTitleElement.textContent = `${this.firstName} ${this.lastName}`;

        if (this.online) {
            divTitleElement.classList.add('online');
        }

        let buttonElement = document.createElement('button');
        buttonElement.innerHTML = '&#8505;';

        divTitleElement.appendChild(buttonElement);

        let secondDivElement = document.createElement('div');
        secondDivElement.classList.add('info');
        secondDivElement.style.display = 'none';

        let firstSpanElement = document.createElement('span');
        firstSpanElement.innerHTML = `&phone; ${this.phone}`;

        let secondSpanElement = document.createElement('span');
        secondSpanElement.innerHTML = `&#9993; ${this.email}`;

        secondDivElement.appendChild(firstSpanElement);
        secondDivElement.appendChild(secondSpanElement);

        articleElement.appendChild(divTitleElement);
        articleElement.appendChild(secondDivElement);

        buttonElement.addEventListener('click', (e) => {
            let infoDivElement = e.currentTarget.parentElement.nextSibling;
            infoDivElement.style.display = infoDivElement.style.display === 'block' ? 'none' : 'block';
        });

        document.getElementById(id).appendChild(articleElement);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
