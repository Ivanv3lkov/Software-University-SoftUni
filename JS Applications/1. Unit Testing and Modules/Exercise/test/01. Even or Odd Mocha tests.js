let expect = require('chai').expect;
let assert = require('chai').assert;
let isOddOrEven = require('../01. Even or Odd').isOddOrEven;

describe('isOddOrEven', function () {
    it('should return undefined with a number parameter', function () {
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not return the correct result!");
    });

    it('should return undefined with an object parameter', function () {
        expect(isOddOrEven({ name: "George" })).to.equal(undefined, "Function did not return  the correct result!");
    });

    it('should return correct result with an even length', function () {
        assert.equal(isOddOrEven("roar"), "even", "Function did not return the correct result!");
    });

    it('should return correct with an odd length', function () {
        expect(isOddOrEven("Peter")).to.equal("odd", "Function did not return the correct result!");
    });

    it('should return correct values with multiple consecutive checks', function () {
        expect(isOddOrEven("rat")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("dog")).to.equal("odd", "Function did not return the correct result!");
        expect(isOddOrEven("lion")).to.equal("even", "Function did not return the correct result!");
    })
});

// use this for testing in the console --->  mocha ./"01. Even or Odd Mocha tests"