const expect = require('chai').expect;
const lookupChar = require('../02. Char Lookup').lookupChar;

describe("lookupChar", function () {
    it('should return undefined with a non-string first parameter', function () {
        expect(lookupChar(13, 23)).to.equal(undefined, "The function did not return the correct result");
    });

    it('should return undefined if the second parameter is not a number', function () {
        expect(lookupChar("pesho", "gosho")).to.equal(undefined, "The function did not return the correct result");
    });

    it('should return undefined with a floating point number second parameter', function () {
        expect(lookupChar("pesho", 3.12)).to.equal(undefined, "The function did not return the correct result");
    });

    it('should return incorrect index with an incorrect index value', function () {
        expect(lookupChar("gosho", 13)).to.equal("Incorrect index", "The function did not return the correct result");
    });

    it('should return incorrect index with a negative index value', function () {
        expect(lookupChar("stamat", -1)).to.equal("Incorrect index", "The function did not return the correct result");
    });

    it('should return incorrect index with an index value equal to string length', function () {
        expect(lookupChar("pesho", 5)).to.equal("Incorrect index", "The function did not return the correct result");
    });

    it('should return correct value with correct parameters', function () {
        expect(lookupChar("pesho", 0)).to.equal("p", "The function did not return the correct result");
    });

    it('should return correct value with correct parameters', function () {
        expect(lookupChar("stamat", 3)).to.equal("m", "The function did not return the correct result");
    });
});


// use this for testing in the console --->  mocha ./"02. Char Lookup Mocha tests"