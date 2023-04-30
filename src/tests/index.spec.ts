import { assert, expect } from 'chai';

import generatePassword from '../index';
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
} from '../utils';

describe('getRandomNumber', () => {
    it('Value to be exists', () => {
        assert.exists(getRandomNumber(7), 'Value is not exists');
    });

    it("Pass 'number' and returned value to be a 'number'", () => {
        expect(getRandomNumber(7)).to.be.a('number', "Value type is not a 'number'");
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

const length = 16;
const quantity = 3;

describe('generatePassword', () => {
    it('Value to be exists', () => {
        assert.exists(
            generatePassword({
                length,
                quantity,
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

    it('Returned value without similar characters', () => {
        const regExp = new RegExp(RegExps.SimilarChars);

        expect(
            regExp.test(
                generatePassword({
                    length,
                    quantity,
                    excludeSimilarChars: true,
                })[0],
            ),
        ).to.be.false;
    });

    it('Returned value without ambiguous characters', () => {
        const regExp = new RegExp(RegExps.AmbiguousChars);

        expect(
            regExp.test(
                generatePassword({
                    length,
                    quantity,
                    excludeAmbiguousChars: true,
                })[0],
            ),
        ).to.be.false;
    });

    it('Returned value without sequential', () => {
        const hasSequentialChars = (str: string) => {
            return str
                .split('')
                .map((_, index, array) => {
                    if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
                        return Number(array[index]) + 1 === Number(array[index + 1]);
                    }
                })
                .some((char) => char);
        };

        expect(
            hasSequentialChars(
                generatePassword({
                    length,
                    quantity,
                    excludeSequentialChars: true,
                })[0],
            ),
        ).to.be.false;
    });

    it('Returned value without duplicates characters', () => {
        const regExp = new RegExp(RegExps.Duplicates);

        expect(
            regExp.test(
                generatePassword({
                    length,
                    quantity,
                    excludeDuplicatesChars: true,
                })[0],
            ),
        ).to.be.false;
    });

    it('Returned value must not start with a number characters', () => {
        const regExp = new RegExp(RegExps.StartWithANumber);

        expect(
            regExp.test(
                generatePassword({
                    length,
                    quantity,
                    dontStartingWithANumber: true,
                })[0],
            ),
        ).to.be.false;
    });

    it('Returned value must not start with a symbol', () => {
        const regExp = new RegExp(RegExps.StartWithASymbol);

        expect(
            regExp.test(
                generatePassword({
                    length,
                    quantity,
                    dontStartingWithASymbol: true,
                })[0][0],
            ),
        ).to.be.false;
    });
});
