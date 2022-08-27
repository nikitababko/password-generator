import { ArgsType } from 'utils/index.types';
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

// const stringWithoutDuplicates = (str: string = '1b96d%A;Be&G3i1') => {
//     const hasDuplicates = new Set(str).size < str.length;

//     console.log(hasDuplicates);

//     // console.log(new Set(str.split('')));
// };

// stringWithoutDuplicates();

const random = (args: ArgsType) => {
    const {
        dontBeginWithANumberOrSymbol,
        includeNumbers,
        includeLowerCaseCharacters,
        includeUpperCaseCharacters,
        includeSymbols,
        noSimilarCharacters,
    } = args;

    let str: string[] = [];

    if (includeNumbers) str.push(alphabetNumbers[randomIndex()]);
    if (includeLowerCaseCharacters) str.push(alphabetLowerCase[randomIndex()]);
    if (includeUpperCaseCharacters) str.push(alphabetUpperCase[randomIndex()]);
    if (includeSymbols) str.push(alphabetSymbols[randomIndex()]);

    if (dontBeginWithANumberOrSymbol) {
        return stringDontBeginNumberOrSymbol(str.join(''));
    }

    // if (true) {
    //     return stringWithoutDuplicates(str.join(''));
    // }

    // if (noSimilarCharacters) {
    //     let testArr: string[] = []
    //     for (let item of alphabetCharacters) {
    //         testArr.push()
    //     }
    //     return str.join('').replaceAll('I', '0000');
    // }

    const sorted = sortRandom(str).join('');

    return sorted;
};

const passGen = (args: ArgsType): string[] => {
    const {
        length,
        quantity,
        includeNumbers,
        includeLowerCaseCharacters,
        includeUpperCaseCharacters,
        includeSymbols,
        dontBeginWithANumberOrSymbol,
        noSimilarCharacters,
    } = args;

    const pattern = Array(length).fill('#');

    const password = (args: ArgsType): string[] => {
        const { quantity = 4, dontBeginWithANumberOrSymbol, noSimilarCharacters } = args;

        const arr: string[] = [];

        for (let i = 0; i < quantity; i++) {
            const v = pattern
                .join('')
                .replaceAll(/#/g, () =>
                    random({
                        dontBeginWithANumberOrSymbol,
                        includeNumbers,
                        includeLowerCaseCharacters,
                        includeUpperCaseCharacters,
                        includeSymbols,
                        noSimilarCharacters,
                    }),
                )
                .slice(0, 16);

            // const v = random({
            //     dontBeginWithANumberOrSymbol,
            //     includeNumbers,
            //     includeLowerCaseCharacters,
            //     includeUpperCaseCharacters,
            //     includeSymbols,
            //     noSimilarCharacters,
            // });

            // const hasDuplicates = new Set(v).size < v.length;
            // if (hasDuplicates) {
            // }

            // console.log(hasDuplicates);

            arr.push(v);
        }

        return arr;
    };

    return password({ quantity, dontBeginWithANumberOrSymbol, includeNumbers, noSimilarCharacters });
};

console.log(
    passGen({
        length: 16,
        quantity: 1,
        includeNumbers: true,
        dontBeginWithANumberOrSymbol: false,
        includeLowerCaseCharacters: true,
        includeUpperCaseCharacters: true,
        includeSymbols: true,
        noSimilarCharacters: true,
    }),
);
