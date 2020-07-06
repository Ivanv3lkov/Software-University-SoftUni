class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this._totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.clients.filter(c => c.procedures.length > 0).length == this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        } else {
            const client = this.clients.find(c => c.ownerName == ownerName && c.petName == petName);
            if (client) {
                if (client.procedures.length > 0) {
                    throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${client.procedures.join(', ')}.`);
                } else {
                    client.procedures = procedures.slice();
                    return `Welcome ${petName}!`
                }
            } else {
                this.clients.push({
                    ownerName,
                    petName,
                    kind,
                    procedures: procedures.slice()
                });
                return `Welcome ${petName}!`
            }
        }
    }

    onLeaving(ownerName, petName) {
        let pets = this.clients.filter(c => c.ownerName == ownerName);

        if (pets.length === 0) {
            throw new Error('Sorry, there is no such client!');
        } else {
            const client = pets.find(p => p.petName === petName)
            if (!client || client.procedures.length === 0) {
                throw new Error(`Sorry, there are no procedures for ${petName}!`);
            } else {
                this._totalProfit += client.procedures.length * 500;
                client.procedures.length = 0;
                return `Goodbye ${petName}. Stay safe!`
            }
        }
    }

    toString() {
        let result = [
            `${this.clinicName} is ${Math.floor(this.clients.filter(c => c.procedures.length > 0).length / this.capacity * 100)}% busy today!`,
            `Total profit: ${this._totalProfit.toFixed(2)}$`
        ]
        const clients = this.clients.slice();

        clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName) || a.petName.localeCompare(b.petName));

        clients.forEach((c, i, arr) => {
            if (i == 0 || (i > 0 && c.ownerName != arr[i - 1].ownerName)) {
                result.push(c.ownerName + ' with:');
            }
            result.push(`---${c.petName} - a ${c.kind.toLowerCase()} that needs: ${c.procedures.join(', ')}`);
        });

        return result.join('\n');
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








