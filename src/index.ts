const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetNumbers = '0123456789';
const alphabetSymbols = `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`;
const similarCharacters = 'ilI1LoO0';

const stringDontBeginNumberOrLetter = (str: string) => {
    const firstChar = str[0];

    const withANumber = () => {
        for (let item of alphabetNumbers) {
            if (item === firstChar) return !!item;
        }
    };

    const withASymbol = () => {
        for (let item of alphabetSymbols) {
            if (item === firstChar) return !!item;
        }
    };

    const newStr = withANumber() || withASymbol() ? str.replace(firstChar, 'j') : str;

    return newStr;
};

const random = (args: any) => {
    const {
        noSimilarCharacters,
        dontBeginWithANumberOrSymbol,
        includeNumbers,
        includeLowerCaseChar,
        includeUpperCaseChar,
        includeSymbols,
    } = args;
    const randomIndex = () => Number(String(Math.random())[2]);

    let str: string[] = [];

    if (includeNumbers) str.push(alphabetNumbers[randomIndex()]);
    if (includeLowerCaseChar) str.push(alphabetLowerCase[randomIndex()]);
    if (includeUpperCaseChar) str.push(alphabetUpperCase[randomIndex()]);
    if (includeSymbols) str.push(alphabetLowerCase[randomIndex()]);

    return str.join('');
};

const passGen = (args: any): string[] => {
    const {
        length,
        only,
        quantity,
        noSimilarCharacters,
        includeNumbers,
        includeLowerCaseChar,
        includeUpperCaseChar,
        includeSymbols,
        dontBeginWithANumberOrSymbol,
    } = args;

    const pattern = Array(length).fill('#');

    const password = (args: any): string[] => {
        const { quantity, noSimilarCharacters, dontBeginWithANumberOrSymbol } = args;

        const arr: string[] = [];

        for (let i = 0; i < quantity; i++) {
            const v = pattern
                .join('')
                .replaceAll(/#/g, () =>
                    random({
                        noSimilarCharacters,
                        dontBeginWithANumberOrSymbol,
                        includeNumbers,
                        includeLowerCaseChar,
                        includeUpperCaseChar,
                        includeSymbols,
                    }),
                )
                .slice(0, 16);

            arr.push(v);
        }

        return arr;
    };

    return password({ quantity, noSimilarCharacters, dontBeginWithANumberOrSymbol, includeNumbers });
};

console.log(
    passGen({
        length: 16,
        only: true,
        quantity: 3,
        noSimilarCharacters: true,
        dontBeginWithANumberOrSymbol: true,
        includeNumbers: true,
        includeLowerCaseChar: true,
        includeUpperCaseChar: true,
        includeSymbols: true,
    }),
);
