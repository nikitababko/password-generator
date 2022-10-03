import { GeneratePasswordType } from './index.types';
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
export declare const generatePassword: GeneratePasswordType;
//# sourceMappingURL=index.d.ts.map