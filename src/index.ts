import { GeneratePasswordType } from './index.types';
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
    length = 16,
    quantity = 1,
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

        if (dontStartingWithANumber) {
            if (RegExps.StartWithANumber.test(password[0])) {
                password = getStringWithoutStartingWithANumber(password);
            }
        }

        if (dontStartingWithASymbol) {
            if (RegExps.StartWithASymbol.test(password[0])) {
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
