import type { GeneratePasswordType } from './index.types';
import {
    Alphabet,
    getRandomCharFromString,
    getStringWithoutAmbiguousChars,
    getStringWithoutDuplicates,
    getStringWithoutSequentialChars,
    getStringWithoutSimilarChars,
    getStringWithoutStartingWithANumber,
    getStringWithoutStartingWithASymbol,
    RegExps,
} from './utils';
import { FIRST_ELEMENT, PASSWORD_LENGTH, PASSWORD_QUANTITY } from './constants';

/**
 * @description Password generator
 *
 * @example
 * generatePassword({
 *      length = 16,
 *      quantity = 2,
 *      includeNumbers: true,
 *      includeLowerCaseChars: true,
 *      includeUpperCaseChars: true,
 *      includeSymbols: false,
 *      excludeSimilarChars: true
 *      excludeAmbiguousChars: true
 *      excludeSequentialChars: false,
 *      excludeDuplicatesChars: false,
 *      dontStartingWithANumber: false,
 *      dontStartingWithASymbol: true,
 * })
 *
 * @param {Object} passwordConfig - password configuration
 * @param {number} passwordConfig.length - password length
 * @param {number} passwordConfig.quantity - passwords quantity
 * @param {boolean} passwordConfig.includeNumbers - include numbers or not
 * @param {boolean} passwordConfig.includeLowerCaseChars - include lower case chars in passwords
 * @param {boolean} passwordConfig.includeUpperCaseChars - include upper case chars in passwords
 * @param {boolean} passwordConfig.includeSymbols - include symbols in password
 * @param {boolean} passwordConfig.excludeAmbiguousChars - exclude ambiguous chars in password
 * @param {boolean} passwordConfig.excludeSequentialChars - exclude sequences chars in password
 * @param {boolean} passwordConfig.excludeDuplicatesChars - exclude duplicates chars in password
 * @param {boolean} passwordConfig.excludeSimilarChars - exclude similar chars in password
 * @param {boolean} passwordConfig.dontStartingWithANumber - do not start password with number
 * @param {boolean} passwordConfig.dontStartingWithASymbol - do not start password with symbol
 *
 * @returns {string[]} passwords array
 *
 * @author Nikita Babko <niki.babko@gmail.com>
 * @link <https://github.com/nikitababko>
 */
const generatePassword: GeneratePasswordType = ({
    length = PASSWORD_LENGTH,
    quantity = PASSWORD_QUANTITY,
    includeNumbers = true,
    includeLowerCaseChars = true,
    includeUpperCaseChars = true,
    includeSymbols = true,
    excludeSimilarChars,
    excludeSequentialChars,
    excludeDuplicatesChars,
    excludeAmbiguousChars,
    dontStartingWithANumber,
    dontStartingWithASymbol,
}) => {
    const passwordsArray: string[] = [];

    for (let i = 0; i < quantity; i++) {
        let string = '';

        for (let j = 0; j < length; j++) {
            if (includeUpperCaseChars) {
                string += getRandomCharFromString(Alphabet.UpperChars);
            }
            if (includeLowerCaseChars) {
                string += getRandomCharFromString(Alphabet.LowerChars);
            }
            if (includeNumbers) {
                string += getRandomCharFromString(Alphabet.NumberChars);
            }
            if (includeSymbols) {
                string += getRandomCharFromString(Alphabet.SymbolChars);
            }
        }

        let password: string = string.slice(FIRST_ELEMENT, length);

        if (dontStartingWithANumber) {
            if (RegExps.StartWithANumber.test(password.at(FIRST_ELEMENT) ?? '')) {
                password = getStringWithoutStartingWithANumber(password);
            }
        }

        if (dontStartingWithASymbol) {
            if (RegExps.StartWithASymbol.test(password.at(FIRST_ELEMENT) ?? '')) {
                password = getStringWithoutStartingWithASymbol(password);
            }
        }

        if (excludeSequentialChars) {
            password = getStringWithoutSequentialChars(password);
        }

        if (excludeSimilarChars) {
            password = getStringWithoutSimilarChars(password);
        }

        if (excludeAmbiguousChars) {
            password = getStringWithoutAmbiguousChars(password);
        }

        if (excludeDuplicatesChars) {
            password = getStringWithoutDuplicates(password);
        }

        passwordsArray.push(password);
    }

    return passwordsArray;
};

export default generatePassword;
