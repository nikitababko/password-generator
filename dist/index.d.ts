import { GeneratePasswordType } from 'index.types';
/**
 * generatePassword.
 *
 * @param {number} [length=4] - passwords length
 * @param {number} [quantity=1] - passwords quantity
 * @param {boolean} includeNumbers - inlcude numbers or not
 * @param {boolean} dontStartWithANumber - do not start password with number
 * @param {boolean} dontStartWithASymbol - do not start password with symbol
 * @param {boolean} includeLowerCaseChars - inlcude lower case chars in passwords
 * @param {boolean} includeUpperCaseChars - inlcude upper case chars in passwords
 * @param {boolean} includeSymbols - inlcude symbols in password
 * @param {boolean} noSimilarChars - inlcude similar chars in password
 * @param {boolean} noSequentialChars - passwords without sequences
 * @param {boolean} noDuplicatesChars - passwords without dublicates
 * @return {string[]} passwords array
 *
 * @example
 *     generatePassword({
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
            })
 */
export declare const generatePassword: GeneratePasswordType;
//# sourceMappingURL=index.d.ts.map