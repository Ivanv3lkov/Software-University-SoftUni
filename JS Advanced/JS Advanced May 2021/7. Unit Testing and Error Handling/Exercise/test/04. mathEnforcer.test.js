const { assert } = require('chai');
const mathEnforcer = require('../04. mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive method', () => {
        it('should return undefined when the argument is undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined)
        })
        it('should return undefined when the argument is null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined)
        })
        it('should return undefined when the argument is string', () => {
            assert.equal(mathEnforcer.addFive('1'), undefined)
        })
        it('should return correct result when the argument is a number', () => {
            assert.equal(mathEnforcer.addFive(1), 6)
        })
        it('should return correct result when the argument is a number', () => {
            assert.equal(mathEnforcer.addFive(1.1), 6.1)
        })
        it('should return correct result when the argument is a number', () => {
            assert.equal(mathEnforcer.addFive(-1), 4)
        })
    })
    describe('subtractTen method', () => {
        it('should return undefined when the argument is undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined)
        })
        it('should return undefined when the argument is null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined)
        })
        it('should return undefined when the argument is string', () => {
            assert.equal(mathEnforcer.subtractTen('1'), undefined)
        })
        it('should return correct result when the argument is a number', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0)
        })
        it('should return correct result when the argument is a number', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20)
        })
        it('should return correct result when the argument is a number', () => {
            assert.closeTo(mathEnforcer.subtractTen(1.1 + 2.2), -6.7, 0.01)
        })
        it('should return correct result when the argument is a number', () => {
            assert.closeTo(mathEnforcer.subtractTen(2.2 - 1.1), -8.9, 0.01)
        })
    })   
    describe('sum method', () => {
        it('should return undefined when the first argument is a string', () => {
            assert.equal(mathEnforcer.sum('one', 1), undefined)
        })
        it('should return undefined when the second argument is a string', () => {
            assert.equal(mathEnforcer.sum(1, 'one'), undefined)
        })
        it('should return correct sum when the both arguments are numbers', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2)
        })
        it('should return correct sum when the both arguments are numbers', () => {
            assert.equal(mathEnforcer.sum(1.1, 1.1), 2.2)
        })
        it('should return correct sum when the both arguments are numbers', () => {
            assert.closeTo(mathEnforcer.sum(-1.1, 1.1), 0, 0.01)
        })
    }) 
})