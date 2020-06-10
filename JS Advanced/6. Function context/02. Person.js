function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        set(newFullName) {
            const nameArray = newFullName.split(' ');
            if (nameArray.length !== 2) { return; };
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        },
        get() {
            return this.firstName + ' ' + this.lastName;
        }
    });
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
