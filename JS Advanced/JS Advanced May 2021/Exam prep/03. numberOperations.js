describe("numberOperations", function () {
    describe("powNumber", function () {
        it("Should return number to the second power", function () {
            assert.strictEqual(numberOperations.powNumber(3), 9);
            assert.strictEqual(numberOperations.powNumber(1.5), 1.5 * 1.5);
            assert.strictEqual(numberOperations.powNumber(-4), 16);
            assert.strictEqual(numberOperations.powNumber(0), 0);
            assert.isNaN(numberOperations.powNumber(NaN));
            // expect(numberOperations.powNumber(NaN)).to.be.NaN;
        });
    });
 
    describe("numberChecker", function () {
        it("Should correctly coerce input argument", function () {
            assert.strictEqual(numberOperations.numberChecker('3'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!');
        });
 
        it("Should throw when passed a argument that coerces to NaN", function () {
            assert.throw(() => numberOperations.numberChecker('abc'), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(undefined), Error, 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('123b'), Error, 'The input is not a number!');
            // expect(() => numberOperations.numberChecker('123b')).to.throw(Error, 'The input is not a number!');
        });
 
        it("Should return correct string when argument is a valid number", function () {
            assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('-100'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker('123.51'), 'The number is greater or equal to 100!');
        });
    });
 
    describe("sumArrays", function () {
        it("Should return empty array when called with empty arrays", function () {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
        });
 
        it("Should return empty array when one parameter is an empty array", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], []), [1, 2, 3]);
            assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);
        });
 
        it("Should return correct result when both parameters are non empty equal length arrays", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([-1, 2, 3], [-2, 3, 4]), [-3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2, 3], [2.2, 3, 4]), [1.1 + 2.2, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c', 'd']), ['ab', 'bc', 'cd']);
        });
 
        it("Should return correct result when both parameters are non empty arrays of different length", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 7], [2, 3]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([-1, 2, 7], [-2, 3]), [-3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2, 8], [2.2, 3]), [1.1 + 2.2, 5, 8]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c']), ['ab', 'bc', 'c']);
 
        });
    });
});