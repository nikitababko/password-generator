import { assert, expect } from 'chai';

import generatePassword from './index';
import {
    getRandomCharFromString,
    getRandomNumber,
    getStringWithoutAmbiguousChars,
    getStringWithoutDuplicates,
    getStringWithoutSequentialChars,
    getStringWithoutSimilarChars,
    getStringWithoutStartingWithANumber,
    getStringWithoutStartingWithASymbol,
    RegExps,
} from './utils';
import { FIRST_ELEMENT, NEXT_CHAR, PASSWORD_LENGTH, PASSWORD_QUANTITY } from './constants';

describe('getRandomNumber', () => {
    const multiplier = 7;

    it('Value to be exists', () => {
        assert.exists(getRandomNumber(multiplier), 'Value is not exists');
    });

    it("Pass 'number' and returned value to be a 'number'", () => {
        expect(getRandomNumber(multiplier)).to.be.a('number', "Value type is not a 'number'");
    });

    it("Pass 'string' and returned value to be a 'number'", () => {
        expect(getRandomNumber('some-string')).to.be.a('number', "Value type is not a 'number'");
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

describe('getStringWithoutStartingWithANumber', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutStartingWithANumber('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutStartingWithANumber('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('getStringWithoutStartingWithASymbol', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutStartingWithASymbol('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutStartingWithASymbol('some-string')).to.be.a('string', "Value type is not a 'string'");
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

describe('getStringWithoutAmbiguousChars', () => {
    it('Value to be exists', () => {
        assert.exists(getStringWithoutAmbiguousChars('some-string'), 'Value is not exists');
    });

    it("Returned value to be a 'string'", () => {
        expect(getStringWithoutAmbiguousChars('some-string')).to.be.a('string', "Value type is not a 'string'");
    });
});

describe('generatePassword', () => {
    it('Value to be exists', () => {
        assert.exists(
            generatePassword({
                length: PASSWORD_LENGTH,
                quantity: PASSWORD_QUANTITY,
                dontStartingWithANumber: true,
                dontStartingWithASymbol: true,
                includeLowerCaseChars: true,
                includeNumbers: true,
                includeSymbols: true,
                includeUpperCaseChars: true,
                excludeDuplicatesChars: true,
                excludeSequentialChars: true,
                excludeSimilarChars: true,
            }),
            'Value is not exists',
        );
    });

    it("Returned value to be an 'array'", () => {
        expect(
            generatePassword({
                length: PASSWORD_LENGTH,
                quantity: PASSWORD_QUANTITY,
            }),
        ).to.be.an('array', 'Value is not an array');
    });

    it("Returned array length to be equal to 'quantity'", () => {
        assert.lengthOf(
            generatePassword({
                length: PASSWORD_LENGTH,
                quantity: PASSWORD_QUANTITY,
            }),
            PASSWORD_QUANTITY,
            "Array length is not equal to 'quantity'",
        );
    });

    it("Returned value length to be equal to 'length'", () => {
        expect(
            generatePassword({
                length: PASSWORD_LENGTH,
                quantity: PASSWORD_QUANTITY,
            }).at(FIRST_ELEMENT) ?? '',
        ).to.be.length(PASSWORD_LENGTH, "Value length is not equal to 'length'");
    });

    it('Returned value without similar characters', () => {
        expect(
            RegExps.SimilarChars.test(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    excludeSimilarChars: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });

    it('Returned value without ambiguous characters', () => {
        expect(
            RegExps.AmbiguousChars.test(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    excludeAmbiguousChars: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });

    it('Returned value without sequential', () => {
        const hasSequentialChars = (str: string) => {
            return str
                .split('')
                .map((_, index, array) => {
                    if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + NEXT_CHAR]))) {
                        return Number(array[index]) + NEXT_CHAR === Number(array[index + NEXT_CHAR]);
                    }

                    return false;
                })
                .some((char) => char);
        };

        expect(
            hasSequentialChars(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    excludeSequentialChars: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });

    it('Returned value without duplicates characters', () => {
        expect(
            RegExps.Duplicates.test(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    excludeDuplicatesChars: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });

    it('Returned value must not start with a number characters', () => {
        expect(
            RegExps.StartWithANumber.test(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    dontStartingWithANumber: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });

    it('Returned value must not start with a symbol', () => {
        expect(
            RegExps.StartWithASymbol.test(
                generatePassword({
                    length: PASSWORD_LENGTH,
                    quantity: PASSWORD_QUANTITY,
                    dontStartingWithASymbol: true,
                }).at(FIRST_ELEMENT) ?? '',
            ),
        ).to.be.false;
    });
});
