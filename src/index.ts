import { ArgsType, IncludeType } from 'utils/index.types';

const Include: IncludeType = {
    UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LowersChars: 'abcdefghijklmnopqrstuvwxyz',
    NumbersChars: '1234567890',
    SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
    SimilarChars: 'ilI1LoO0',
};

const getRandomCharFromString = (str: string): string => {
    const hasSimilarChars: boolean = Include.SimilarChars.includes(str.charAt(Math.floor(Math.random() * str.length)));

    if (hasSimilarChars) return 's';

    return str.charAt(Math.floor(Math.random() * str.length));
};

const generatePassword = (args: ArgsType): string[] => {
    const {
        length = 4,
        quantity = 1,
        includeNumbers,
        includeLowerCaseChars,
        includeUpperCaseChars,
        includeSymbols,
        dontBeginWithANumberOrSymbol,
        noSimilarChars,
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

        const password: string = string.slice(0, length);

        if (dontBeginWithANumberOrSymbol) {
            if (/^\d/.test(password) || /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/.test(password)) {
                const newPassword = password.replace(password[0], getRandomCharFromString(Include.LowersChars));
                passwordsArray.push(newPassword);
            }
        } else {
            passwordsArray.push(password);
        }
    }

    return passwordsArray;
};

console.log(
    generatePassword({
        length: 16,
        quantity: 1,
        includeNumbers: false,
        dontBeginWithANumberOrSymbol: true,
        includeLowerCaseChars: false,
        includeUpperCaseChars: false,
        includeSymbols: true,
        noSimilarChars: true,
    }),
);
