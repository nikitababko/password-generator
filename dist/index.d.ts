import type { GeneratePasswordType } from './index.types';
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
declare const generatePassword: GeneratePasswordType;
export default generatePassword;
//# sourceMappingURL=index.d.ts.map