import {GeneratePasswordType} from './index.types';
import {
    getRandomCharFromString,
    getStringWithoutBeginNumber,
    getStringWithoutBeginSymbol,
    getStringWithoutDuplicates,
    getStringWithoutSequentialChars,
    getStringWithoutSimilarChars,
    Include,
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
 * @param {boolean} passwordConfig.noSimilarChars - include similar chars in password
 * @param {boolean} passwordConfig.noSequentialChars - passwords without sequences
 * @param {boolean} passwordConfig.noDuplicatesChars - passwords without duplicates
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
}) => {
    const passwordsArray: string[] = [];

    for (let i = 0; i < quantity; i++) {
        let string: string = '';

        for (let i = 0; i < length; i++) {
            if (includeUpperCaseChars) {
                string += getRandomCharFromString(Include.UppersChars);
            }
            if (includeLowerCaseChars) {
                string += getRandomCharFromString(Include.LowersChars);
            }
            if (includeNumbers) {
                string += getRandomCharFromString(Include.NumbersChars);
            }
            if (includeSymbols) {
                string += getRandomCharFromString(Include.SymbolChars);
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

        if (noDuplicatesChars) {
            password = getStringWithoutDuplicates(password);
        }

        passwordsArray.push(password);
    }

    return passwordsArray;
};
