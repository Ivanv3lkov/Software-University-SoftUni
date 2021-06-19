const assert = require('chai').assert;
const isOddOrEven = require('../02. evenOrOdd').isOddOrEven;

describe('checks if the given string is odd or even', () => {
    it('should return undefined with a number parameter', () => {
        assert.equal(isOddOrEven(13), undefined);
    })

    it('should return undefined with an array parameter', () => {
        assert.equal(isOddOrEven(['cat', 'dog', 'fly']), undefined);
    })

    it('should return undefined with object parameter', () => {
        assert.equal(isOddOrEven({car: 'Toyota'}), undefined);
    })

    it('should return undefined without any parameter to be passed', () => {
        assert.equal(isOddOrEven(), undefined);
    })

    it('should return even with even parameter', () => {
        let actualResult = isOddOrEven('ACDC');
        let expectedResult = 'even';
        assert.equal(actualResult, expectedResult);
    }) 

    it('should return odd with odd parameter', () => {
        let actualResult = isOddOrEven('R&B');
        let expectedResult = 'odd';
        assert.equal(actualResult, expectedResult);
    }) 

    it('should return correct values with multiple consecutive checks', () => {
        assert.equal(isOddOrEven('tenis'), 'odd');
        assert.equal(isOddOrEven('volleyball'), 'even');
        assert.equal(isOddOrEven('baseball'), 'even');
        assert.equal(isOddOrEven('football'), 'even');
    });
})