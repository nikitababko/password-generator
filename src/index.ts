import { randomIndex } from './utils';

const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetNumbers = '0123456789';
const alphabetSymbols = `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`;
const similarCharacters = 'ilI1LoO0';

const stringDontBeginNumberOrSymbol = (str: string) => {
    const firstChar = str[0];
    console.log('firstChar', str, firstChar);

    const withANumber = () => {
        return alphabetNumbers.indexOf(firstChar);
    };

    const withASymbol = () => {
        return alphabetSymbols.indexOf(firstChar);
    };

    const newStr = withANumber() || withASymbol() ? str.replace(firstChar, alphabetLowerCase[randomIndex()]) : str;

    return newStr;
};

const random = (args: any) => {
    const {
        dontBeginWithANumberOrSymbol,
        includeNumbers,
        includeLowerCaseChars,
        includeUpperCaseChars,
        includeSymbols,
        noSimilarChars,
    } = args;

    let str: string[] = [];

    if (includeLowerCaseChars) str.push(alphabetLowerCase[randomIndex()]);
    if (includeNumbers) str.push(alphabetNumbers[randomIndex()]);
    if (includeUpperCaseChars) str.push(alphabetUpperCase[randomIndex()]);
    if (includeSymbols) str.push(alphabetSymbols[randomIndex()]);

    if (dontBeginWithANumberOrSymbol) {
        return stringDontBeginNumberOrSymbol(str.join(''));
    }

    // if (noSimilarChars) {
    //     return str.join('').replaceAll('I', '0000');
    // }

    return str.join('');
};

const passGen = (args: any): string[] => {
    const {
        length,
        quantity,
        includeNumbers,
        includeLowerCaseChars,
        includeUpperCaseChars,
        includeSymbols,
        dontBeginWithANumberOrSymbol,
        noSimilarChars,
    } = args;

    const pattern = Array(length).fill('#');

    const password = (args: any): string[] => {
        const { quantity, dontBeginWithANumberOrSymbol, noSimilarChars } = args;

        const arr: string[] = [];

        for (let i = 0; i < quantity; i++) {
            const v = pattern
                .join('')
                .replaceAll(/#/g, () =>
                    random({
                        dontBeginWithANumberOrSymbol,
                        includeNumbers,
                        includeLowerCaseChars,
                        includeUpperCaseChars,
                        includeSymbols,
                        noSimilarChars,
                    }),
                )
                .slice(0, 16);

            arr.push(v);
        }

        return arr;
    };

    return password({ quantity, dontBeginWithANumberOrSymbol, includeNumbers, noSimilarChars });
};

// console.log(
//     passGen({
//         length: 16,
//         quantity: 3,
//         includeNumbers: true,
//         dontBeginWithANumberOrSymbol: true,
//         includeLowerCaseChars: true,
//         includeUpperCaseChars: true,
//         includeSymbols: true,
//         noSimilarChars: true,
//     }),
// );

console.log(['A', 'B', 'C', 'D', 'E'].sort(() => Math.random() - 0.5));
