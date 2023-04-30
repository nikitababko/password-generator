import { GeneratePasswordType } from './index.types';
import {
    Alphabet,
    getRandomCharFromString,
    getStringWithoutAmbiguousChars,
    getStringWithoutBeginNumber,
    getStringWithoutBeginSymbol,
    getStringWithoutDuplicates,
    getStringWithoutSequentialChars,
    getStringWithoutSimilarChars,
    RegExps,
} from './utils';

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
 *      includeSymbols: true,
 *      noSimilarChars: true
 *      noAmbiguousChars: true
 *      noSequentialChars: true,
 *      dontStartWithANumber: true,
 *      dontStartWithASymbol: true,
 *      noDuplicatesChars: true,
 * })
 *
 * @param {Object} passwordConfig - password configuration
 * @param {number} passwordConfig.length - password length
 * @param {number} passwordConfig.quantity - passwords quantity
 * @param {boolean} passwordConfig.includeNumbers - include numbers or not
 * @param {boolean} passwordConfig.dontStartWithANumber - do not start password with number
 * @param {boolean} passwordConfig.dontStartWithASymbol - do not start password with symbol
 * @param {boolean} passwordConfig.includeLowerCaseChars - include lower case chars in passwords
 * @param {boolean} passwordConfig.includeUpperCaseChars - include upper case chars in passwords
 * @param {boolean} passwordConfig.includeSymbols - include symbols in password
 * @param {boolean} passwordConfig.noSimilarChars - exclude similar chars in password
 * @param {boolean} passwordConfig.noAmbiguousChars - exclude ambiguous chars in password
 * @param {boolean} passwordConfig.noSequentialChars - exclude sequences chars in password
 * @param {boolean} passwordConfig.noDuplicatesChars - exclude duplicates chars in password
 *
 * @returns {string[]} passwords array
 *
 * @author Nikita Babko <niki.babko@gmail.com>
 * @link <https://github.com/nikitababko>
 */
export const generatePassword: GeneratePasswordType = ({
    length = 6,
    quantity = 1,
    includeNumbers = true,
    includeLowerCaseChars = true,
    includeUpperCaseChars = true,
    includeSymbols = true,
    noSimilarChars,
    noSequentialChars,
    dontStartWithANumber,
    dontStartWithASymbol,
    noDuplicatesChars,
    noAmbiguousChars,
}) => {
    const passwordsArray: string[] = [];

    for (let i = 0; i < quantity; i++) {
        let string: string = '';

        for (let i = 0; i < length; i++) {
            if (includeUpperCaseChars) {
                string += getRandomCharFromString(Alphabet.UppersChars);
            }
            if (includeLowerCaseChars) {
                string += getRandomCharFromString(Alphabet.LowersChars);
            }
            if (includeNumbers) {
                string += getRandomCharFromString(Alphabet.NumbersChars);
            }
            if (includeSymbols) {
                string += getRandomCharFromString(Alphabet.SymbolChars);
            }
        }

        let password: string = string.slice(0, length);

        if (dontStartWithANumber) {
            if (RegExps.WithoutBeginNumber.test(password[0])) {
                password = getStringWithoutBeginNumber(password);
            }
        }

        if (dontStartWithASymbol) {
            if (RegExps.WithoutBeginSymbol.test(password[0])) {
                password = getStringWithoutBeginSymbol(password);
            }
        }

        if (noSequentialChars) {
            password = getStringWithoutSequentialChars(password);
        }

        if (noSimilarChars) {
            password = getStringWithoutSimilarChars(password);
        }

        if (noAmbiguousChars) {
            password = getStringWithoutAmbiguousChars(password);
        }

        if (noDuplicatesChars) {
            password = getStringWithoutDuplicates(password);
        }

        passwordsArray.push(password);
    }

    return passwordsArray;
};
