import { GeneratePasswordType } from './index.types';
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
 * Password generator
 *
 * @param {number} [length=6] passwords length
 * @param {number} [quantity=1] passwords quantity
 * @param {boolean} [includeNumbers] include numbers or not
 * @param {boolean} [dontStartWithANumber] do not start password with number
 * @param {boolean} [dontStartWithASymbol] do not start password with symbol
 * @param {boolean} [includeLowerCaseChars] include lower case chars in passwords
 * @param {boolean} [includeUpperCaseChars] include upper case chars in passwords
 * @param {boolean} [includeSymbols] include symbols in password
 * @param {boolean} [noSimilarChars] include similar chars in password
 * @param {boolean} [noSequentialChars] passwords without sequences
 * @param {boolean} [noDuplicatesChars] passwords without duplicates
 * @return {string[]} passwords array
 *
 * @example
 * generatePassword({length = 16, quantity = 2, dontStartWithANumber: true, dontStartWithASymbol: true, includeLowerCaseChars: true, includeNumbers: true, includeSymbols: true, includeUpperCaseChars: true, noDuplicatesChars: true, noSequentialChars: true, noSimilarChars: true})
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
    noDuplicatesChars,
    dontStartWithASymbol,
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
