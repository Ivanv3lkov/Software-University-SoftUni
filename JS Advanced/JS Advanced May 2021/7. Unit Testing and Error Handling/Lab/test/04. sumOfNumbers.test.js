const { assert } = require('chai');
const { sum } = require('../04. sumOfNumbers');

describe('sum function', () => {
    it('should return 9 with the given array: [3, 3, 3]', () => {
        assert.equal(sum([3, 3, 3]), 9);
    })

    it('should return 0 with an empty array []', () => {
        assert.equal(sum([]), 0);
    })

    it('should return NaN with an array of strings', () => {
        assert.isNaN(sum(['toyota', 'mazda', 'nissan']), 'NaN');
    })
})
