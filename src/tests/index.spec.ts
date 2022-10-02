import { expect, assert } from 'chai';

import { generatePassword } from '../index';
import {
    getFactor,
    getRandomCharFromString,
    getStringWithoutBeginNumber,
    getStringWithoutBeginSymbol,
    getStringWithoutDuplicates,
    getStringWithoutSequentialChars,
    getStringWithoutSimilarChars,
} from '../utils';

describe('getFactor', () => {
    it('Value to be exists', () => {
        assert.exists(getFactor(7), 'Value is not exists');
    });

    it("Pass 'number' and returned value to be a 'number'", () => {
        expect(getFactor(7)).to.be.a('number', "Value type is not a 'number'");
    });

    it("Pass 'string' and returned value to be a 'number'", () => {
        expect(getFactor('some-string')).to.be.a('number', "Value type is not a 'number'");
    });
});

describe('getRandomCharFromString', () => {
    it('Value to be exists', () => {
        assert.exists(getRandomCharFromString('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getRandomCharFromString('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutBeginNumber', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutBeginNumber('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutBeginNumber('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutBeginSymbol', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutBeginSymbol('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutBeginSymbol('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutDuplicates', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutDuplicates('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutDuplicates('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutSequentialChars', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutSequentialChars('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutSequentialChars('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutSimilarChars', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutSimilarChars('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutSimilarChars('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

const length = 16;
const quantity = 2;

describe('generatePassword', () => {
    it('Value to be exists', () => {
        assert.exists(
            generatePassword({
                length,
                quantity,
                dontStartWithANumber: true,
                dontStartWithASymbol: true,
                includeLowerCaseChars: true,
                includeNumbers: true,
                includeSymbols: true,
                includeUpperCaseChars: true,
                noDuplicatesChars: true,
                noSequentialChars: true,
                noSimilarChars: true,
            }),
            'Value is not exists',
        );
    });

    it("Returned value to be an 'array'", () => {
        expect(
            generatePassword({
                length,
                quantity,
            }),
        ).to.be.an('array', 'Value is not an array');
    });

    it("Returned array length to be equal to 'quantity'", () => {
        assert.lengthOf(
            generatePassword({
                length,
                quantity,
            }),
            quantity,
            "Array length is not equal to 'quantity'",
        );
    });

    it("Returned value length to be equal to 'length'", () => {
        expect(
            generatePassword({
                length,
                quantity,
            })[0],
        ).to.be.length(length, "Value length is not equal to 'length'");
    });
});
