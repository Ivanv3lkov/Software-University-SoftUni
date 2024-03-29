const { assert } = require('chai');
const { createCalculator } = require('../07. addSubtract');

describe('createCalculator() creates calculator object', () => {
    let calculator;
    beforeEach(() => {
        calculator = createCalculator()
    });

    it('should return 0 as default result', () => {
        assert.equal(calculator.get(), 0)
    });

    it('should add positive numbers', () => {
        calculator.add(2);
        calculator.add(3);
        assert.equal(calculator.get(), 5)
    });

    it('should subtract positive numbers', () => {
        calculator.subtract(2);
        calculator.subtract(3);
        assert.equal(calculator.get(), -5)
    });

    it('should add and subtract decimal numbers', () => {
        calculator.add(5.3);
        calculator.subtract(1.1);
        assert.closeTo(calculator.get(), 4.2, 0.1)
    });

    it('should add and subtract numbers passed as string arguments', () => {
        calculator.add(10);
        calculator.subtract('7');
        calculator.add('-2');
        calculator.subtract(-1);
        assert.equal(calculator.get(), 2)
    });

    it('should return NaN when adding non number', () => {
        calculator.add('test');
        assert.isNaN(calculator.get())
    });
});

//npm test -- test/"07. addSubtract.test.js"