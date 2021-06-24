const PaymentPackage = require('../paymentPackage');
const { assert } = require('chai');

describe('paymentPackage', () => {
    it('should create correct instance', () => {
        let test = new PaymentPackage('Test', 100);

        assert.equal(test.name, 'Test');
        assert.equal(test.value, 100);
        assert.equal(test.VAT, 20);
        assert.equal(test.active, true);
    });
    it('should throw error when non-string value is set for the name', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.name = 123; }, Error, 'Name must be a non-empty string');
        assert.throws(() => { test.name = undefined; }, Error, 'Name must be a non-empty string');
        assert.throws(() => { test.name = null; }, Error, 'Name must be a non-empty string');
    });
    it('should throw error when empty string value is set for the name', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.name = ''; }, Error);
    });
    it('should set correct new name through the setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.name = 'John';

        assert.equal(test.name, 'John');
    });
    it('should throw error when non-number value is set for the value property', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.value = '123'; }, Error, 'Value must be a non-negative number');
        assert.throws(() => { test.value = undefined; }, Error, 'Value must be a non-negative number');
        assert.throws(() => { test.value = null; }, Error, 'Value must be a non-negative number');
    });
    it('should throw error when negative value is given to the setter', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.value = -1; }, Error);
    });
    it('should set correct new value through the setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.value = 200;

        assert.equal(test.value, 200);
    });
    it('should set zero value through the setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.value = 0;

        assert.equal(test.value, 0);
    });
    it('should throw error when non-number value is set for the VAT property', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.VAT = '123'; }, Error);
        assert.throws(() => { test.VAT = undefined; }, Error);
        assert.throws(() => { test.VAT = null; }, Error);
    });

    it('should throw error when negative VAT value is given to the setter', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.VAT = -1; }, Error);
    });
    it('should set correct new VAT value through the setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.VAT = 30;

        assert.equal(test.VAT, 30);
    });
    it('should set zero VAT value through the setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.VAT = 0;

        assert.equal(test.VAT, 0);
    });
    it('should throw when the active value is set to non-boolean', () => {
        let test = new PaymentPackage('Test', 100);

        assert.throws(() => { test.active = 'not'; }, Error);
        assert.throws(() => { test.active = 1; }, Error);
        assert.throws(() => { test.active = undefined; }, Error);
        assert.throws(() => { test.active = null; }, Error);
    });
    it('should set correct new value for the active property through its setter', () => {
        let test = new PaymentPackage('Test', 100);

        test.active = false;

        assert.isFalse(test.active);
    });

    it('should return correct result with initial values of the object', () => {
        let test = new PaymentPackage('Test', 100);

        let totalValue = 100 * (1 + 20 / 100);

        let expected = [
            `Package: Test`,
            `- Value (excl. VAT): 100`,
            `- Value (VAT 20%): ${totalValue}`
          ].join('\n');
      
          assert.equal(test.toString(), expected);
    });

    it('should return correct result with changed values of the object', () => {
        let test = new PaymentPackage('Test', 100);
        test.name = 'John';
        test.value = 123;
        test.VAT = 30;
        test.active = false;

        let totalValue = 123 * (1 + 30 / 100);

        let expected = [
            `Package: John (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): ${totalValue}`
          ].join('\n');
      
          assert.equal(test.toString(), expected);
    });
});