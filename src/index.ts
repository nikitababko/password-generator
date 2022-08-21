import { randomIndex, sortRandom } from './utils';

const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetNumbers = '0123456789';
const alphabetSymbols = `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`;
const alphabetCharacters = 'ilI1LoO0';

const stringDontBeginNumberOrSymbol = (str: string) => {
    const firstChar = str[0];

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

    if (includeNumbers) str.push(alphabetNumbers[randomIndex()]);
    if (includeLowerCaseChars) str.push(alphabetLowerCase[randomIndex()]);
    if (includeUpperCaseChars) str.push(alphabetUpperCase[randomIndex()]);
    if (includeSymbols) str.push(alphabetSymbols[randomIndex()]);

    if (dontBeginWithANumberOrSymbol) {
        return stringDontBeginNumberOrSymbol(str.join(''));
    }

    // if (noSimilarChars) {
    //     let testArr: string[] = []
    //     for (let item of alphabetCharacters) {
    //         testArr.push()
    //     }
    //     return str.join('').replaceAll('I', '0000');
    // }

    return sortRandom(str).join('');
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

console.log(
    passGen({
        length: 16,
        quantity: 3,
        includeNumbers: true,
        dontBeginWithANumberOrSymbol: false,
        includeLowerCaseChars: true,
        includeUpperCaseChars: true,
        includeSymbols: true,
        noSimilarChars: true,
    }),
);
