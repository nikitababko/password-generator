import { GeneratePasswordType } from 'index.types';
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

export const generatePassword: GeneratePasswordType = ({
    length = 4,
    quantity = 1,
    includeNumbers,
    includeLowerCaseChars,
    includeUpperCaseChars,
    includeSymbols,
    noSimilarChars,
    noSequentialChars,
    dontBeginWithANumber,
    noDuplicatesChars,
    dontBeginWithASymbol,
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

        if (dontBeginWithANumber) {
            if (RegExps.WithoutBeginNumber.test(password[0])) {
                password = getStringWithoutBeginNumber(password);
            }
        }

        if (dontBeginWithASymbol) {
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
