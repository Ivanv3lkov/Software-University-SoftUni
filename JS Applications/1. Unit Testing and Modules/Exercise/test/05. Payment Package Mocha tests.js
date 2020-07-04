const expect = require('chai').expect;
const PaymentPackage = require('../05. Payment Package');

describe('PaymentPackage', function () {
    describe("Test name", function () {
        it('1 => Error', function () {
            expect(() => new PaymentPackage(1, 1)).to.throw('Name must be a non-empty string');
        });

        it("'' => Error", function () {
            expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        })

        it('test => test', function () {
            let newObj = new PaymentPackage('test', 1);
            expect(newObj.name).to.equal('test');
        });

        it('newName => newName', function () {
            let newObj = new PaymentPackage('test', 1);
            expect(newObj.name = 'newName').to.equal('newName');
        });
    });

    describe('Test value', function () {
        it('a => Error', function () {
            expect(() => new PaymentPackage('a', 'a')).to.throw('Value must be a non-negative number');
        });

        it('-1 => Error', function () {
            expect(() => new PaymentPackage('a', -1)).to.throw('Value must be a non-negative number');
        });

        it('1 => 1', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.value).to.equal(1);
        });

        it('2 => 2', () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.value = 2).to.equal(2);
        });
    });
    
    describe('Test VAT', function () {
        it("'' => 20", function () {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.VAT).to.equal(20);
        });

        it('a => Error', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.VAT = 'a').to.throw('VAT must be a non-negative number');
        })

        it('-1 => Error', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.VAT = -1).to.throw('VAT must be a non-negative number');
        });

        it('1 => 1', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.VAT = 1).to.equal(1);
        });
    });

    describe('Test active', function () {
        it("'' => true", () => {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.active).to.equal(true);
        });

        it('test => Error', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(() => newObj.active = 'test').to.throw('Active status must be a boolean');
        });

        it('false => false', function () {
            let newObj = new PaymentPackage('a', 1);
            expect(newObj.active = false).to.equal(false);
        });
    });

    describe('Test toString', function () {
        it("test toString", function () {
            let newObj = new PaymentPackage('HR Services', 1500);
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it('test toString', function () {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.active = false;
            expect(newObj.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it('test toString', function () {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.VAT = 0;
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500');
        });

        it('test toString', function () {
            let newObj = new PaymentPackage('HR Services', 0);
            newObj.VAT = 0;
            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
        });
    });
});

// use this for testing in the console --->  mocha ./"05. Payment Package Mocha tests"