const { assert } = require('chai');
const lookupChar = require('../03. charLookup').lookupChar;

describe('lookupChar function', () => {
    it('should return undefined if the first parameter is not from type string', () => {
        assert.equal(lookupChar(7, 7), undefined);
    })

    it('should return undefined if the second parameter is not from type number', () => {
        assert.equal(lookupChar('some text', 'another text'), undefined);
    })

    it('should return undefined if the second parameter is not an integer number', () => {
        assert.equal(lookupChar('Steve Jobs', 3.14), undefined);
    })

    it('should return "Incorrect index" if the second parameter is a negative number', () => {
        assert.equal(lookupChar('some text', -1), 'Incorrect index');
    })

    it('should return "Incorrect index" if the length of the first parameter is lower that the index which comes as a second parameter', () => {
        assert.equal(lookupChar('BMW', 4), 'Incorrect index');
    })

    it('should return "Incorrect index" if the length of the first parameter is equal to the index which comes as a second parameter', () => {
        assert.equal(lookupChar('BMW', 3), 'Incorrect index');
    })

    it('should return the character at the specified index in the string if both parameters are correct', () => {
        assert.equal(lookupChar('BMW', 2), 'W');
    })
}) 



