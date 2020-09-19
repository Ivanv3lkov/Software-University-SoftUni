class VeterinaryClinic {

    clinicName;
    capacity;
    clients;
    totalProfit;
    currentWorkload;

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload === this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        let client = this.clients.find(c => c.ownerName === ownerName);
        let pet = undefined;
        if (client !== undefined) {
            pet = client.pets.find(p => p.petName === petName);
        }

        if (pet !== undefined && pet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${client.ownerName} name! ${pet.petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
        }

        if (client === undefined) {
            client = {ownerName};
            client.pets = [];
            this.clients.push(client);
        }

        client.pets.push({petName, kind, procedures});
        this.currentWorkload++;
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {


        let client = this.clients.find(c => c.ownerName === ownerName);
        if (client === undefined) {
            throw new Error(`Sorry, there is no such client!`);
        }

        let petIndex = client.pets.findIndex(p => p.petName === petName);
        if (petIndex === -1 || client.pets[petIndex].procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        let pet = client.pets[petIndex];
        this.totalProfit += (pet.procedures.length * 500);
        pet.procedures = [];
        this.currentWorkload--;

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let str = '';

        str += `${this.clinicName} is ${Math.floor(this.currentWorkload / this.capacity * 100)}% busy today!\n`;

        str += `Total profit: ${this.totalProfit.toFixed(2)}$\n`;

        this.clients
            .slice()
            .sort((a, b) => a.ownerName.localeCompare(b.ownerName))
            .forEach(client => {
                str += `${client.ownerName} with:\n`;

                client.pets
                    .slice()
                    .sort((a, b) => a.petName.localeCompare(b.petName))
                    .forEach(pet => str += `---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}\n`);
            });

        return str.trim();
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());