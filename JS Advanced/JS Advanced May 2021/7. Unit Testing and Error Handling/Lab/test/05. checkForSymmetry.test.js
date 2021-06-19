const { assert } = require('chai');
const { isSymmetric } = require('../05. checkForSymmetry');

describe('check if isSymmetric function works properly', () => {
    it('should return true with symetric array of numbers', () => {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
    })

    it('should return true with symetric array of strings', () => {
        assert.equal(isSymmetric(['pesho', 'gosho', 'pesho']), true);
    })

    it('should return false with non symetric array of numbers', () => {
        assert.equal(isSymmetric([1, 2, 3, 4, 5]), false);
    })

    it('should return false with null as an argument', () => {
        assert.equal(isSymmetric(null), false);
    })

    it('should return false with a single string as a parameter', () => {
        assert.equal(isSymmetric('barcelona'), false);
    })

    it('should return false with non symetric array of numbers', () => {
        assert.equal(isSymmetric(1, -1), false);
    })

    it('should return false with an empty object', () => {
        assert.equal(isSymmetric({}), false);
    })

    it('should return false for an array of different data types that is not symetric', () => {
        const input = [1, [], {}, true, 'str'];
        const value = isSymmetric(input);
        assert.isFalse(value)
    });

    it('should return true for an array of different data types that is symetric', () => {
        const input = [[], 5, 'str', {}, true, {}, 'str', 5, []];
        const value = isSymmetric(input);
        assert.isTrue(value)
    })
})
