import { generatePassword } from './index';

console.log(
    generatePassword({
        length: 7,
        quantity: 1,
        includeLowerCaseChars: true,
        includeUpperCaseChars: true,
        includeNumbers: true,
        includeSymbols: true,
        noSimilarChars: true,
        noSequentialChars: true,
        noDuplicatesChars: true,
        dontBeginWithANumber: false,
        dontBeginWithASymbol: false,
    }),
);
