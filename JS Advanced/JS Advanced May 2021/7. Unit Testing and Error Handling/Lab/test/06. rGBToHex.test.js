const { assert } = require('chai');
const { rgbToHexColor } = require('../06. rGBToHex');

describe('rgbToHexColor(red, green, blue)', () => {
    describe('Nominal cases(valid input)', () => {
        it('should return #FF9EAA for (255, 158, 170)', () => {
            assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
        });

        it('should return #0C0D0E for (12, 13, 14)', () => {
            assert.equal(rgbToHexColor(12, 13, 14), '#0C0D0E');
        });

        it('should return #000000 for (0, 0, 0)', () => {
            assert.equal(rgbToHexColor(0, 0, 0), '#000000');
        });

        it('should return #FFFFFF for (255, 255, 255)', () => {
            assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
        });
    });

    describe('Special cases(invalid input)', () => {
        it('should return undefined for (-1,0,0)', () => {
           assert.equal(rgbToHexColor(-1, 0, 0), undefined);
        });

        it('should return undefined for (0,-1,0)', () => {
            assert.equal(rgbToHexColor(0, -1, 0), undefined);
        });

        it('should return undefined for (0,0,-1)', () => {
            assert.equal(rgbToHexColor(0, 0, -1), undefined);
        });

        it('should return undefined for (256,0,0)', () => {
            assert.equal(rgbToHexColor(256, 0, 0), undefined);
        });

        it('should return undefined for (0,256,0)', () => {
            assert.equal(rgbToHexColor(0, 256, 0), undefined);
        });

        it('should return undefined for (0,0,256)', () => {
            assert.equal(rgbToHexColor(0, 0, 256), undefined);
        });

        it('should return undefined for (3.14,0,0)', () => {
            assert.equal(rgbToHexColor(3.14, 0, 0), undefined);
        });

        it('should return undefined for (0,3.14,0)', () => {
            assert.equal(rgbToHexColor(0, 3.14, 0), undefined);
        });

        it('should return undefined for (0,0,3.14)', () => {
            assert.equal(rgbToHexColor(0, 0, 3.14), undefined);
        });

        it('should return undefined for ("5", [3], {8:9})', () => {
            assert.equal(rgbToHexColor("5", [3], { 8: 9 }), undefined);
        });

        it('should return undefined for empty input', () => {
            assert.equal(rgbToHexColor(), undefined);
        });
    });
});
