import { ArgsType, IncludeType } from './index.types';
import { getFactor, getRandomCharFromString, getStringWithoutSequentialChars } from './utils';

const Include: IncludeType = {
    UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowersChars: 'abcdefghijklmnopqrstuvwxyz',
    NumbersChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
    NoSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
};

const generatePassword = (args: ArgsType): string[] => {
    const {
        length = 4,
        quantity = 1,
        includeNumbers,
        includeLowerCaseChars,
        includeUpperCaseChars,
        includeSymbols,
        noSimilarChars,
        noSequentialChars,
        dontBeginWithANumberOrSymbol,
    } = args;

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

        if (noSimilarChars) {
            password = password.replaceAll(/[ilI1LoO0]/g, Include.NoSimilarChars[getFactor(password)]);
        }

        if (dontBeginWithANumberOrSymbol) {
            if (/^\d/.test(password) || /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/.test(password)) {
                password = password.replace(password[0], getRandomCharFromString(Include.LowersChars));
            }
        }

        if (noSequentialChars) {
            password = getStringWithoutSequentialChars(password);
        }

        passwordsArray.push(password);
    }

    return passwordsArray;
};

console.log(
    generatePassword({
        length: 16,
        quantity: 1,
        includeNumbers: true,
        includeLowerCaseChars: true,
        includeUpperCaseChars: true,
        includeSymbols: true,
        noSimilarChars: true,
        noSequentialChars: true,
        dontBeginWithANumberOrSymbol: true,
    }),
);
