// const Include: IncludeType = {
//     UppersChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     LowersChars: 'abcdefghijklmnopqrstuvwxyz',
//     NumbersChars: '1234567890',
//     SymbolChars: `!";#$%&'()*+,-./:;<=>?@[]^_{|}~`,
//     SimilarChars: 'ilI1LoO0',
//     NoSimilarChars: 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789',
//     AllChars: function () {
//         return (
//             (this as any).UppersChars +
//             (this as any).LowersChars +
//             (this as any).NumbersChars +
//             (this as any).SymbolChars +
//             (this as any).SimilarChars +
//             (this as any).NoSimilarChars
//         );
//     },
// };

const testStr = '1ss22';

if (/(.)(.*?)(\1)/g.test(testStr)) {
    // const test = testStr.replaceAll(/[^\w\s]|(.)\1/g, '0');
    const newTestStr = testStr.split('').map((item, index, array) => {
        for (let i = 0; i < array.length; i++) {
            console.log(array.indexOf(item));
            if (item === array[i]) {
                return array.join('').replaceAll(item, '#');
            }
            // if (array[i] === item && item !== array[i]) {
            //     console.log(item);
            // }
        }

        // console.log(array[array.indexOf(item)], array[index]);

        // console.log(item === array[array.indexOf(item)]);
    });
    // console.log(newTestStr);
}

// const generatePassword = (args: ArgsType): string[] => {
//     const {
//         length = 4,
//         quantity = 1,
//         includeNumbers,
//         includeLowerCaseChars,
//         includeUpperCaseChars,
//         includeSymbols,
//         noSimilarChars,
//         noSequentialChars,
//         dontBeginWithANumberOrSymbol,
//         noDuplicatesChars,
//     } = args;

//     const passwordsArray: string[] = [];

//     for (let i = 0; i < quantity; i++) {
//         let string: string = '';

//         for (let i = 0; i < length; i++) {
//             if (includeUpperCaseChars) {
//                 string += getRandomCharFromString(Include.UppersChars);
//             }
//             if (includeLowerCaseChars) {
//                 string += getRandomCharFromString(Include.LowersChars);
//             }
//             if (includeNumbers) {
//                 string += getRandomCharFromString(Include.NumbersChars);
//             }
//             if (includeSymbols) {
//                 string += getRandomCharFromString(Include.SymbolChars);
//             }
//         }

//         let password: string = string.slice(0, length);

//         if (dontBeginWithANumberOrSymbol) {
//             if (/^\d/.test(password) || /^(?:.*[!";#$%&'()*+,-./:;<=>?@^_{|}~])/.test(password)) {
//                 password = password.replace(password[0], getRandomCharFromString(Include.LowersChars));
//             }
//         }

//         if (noSequentialChars) {
//             password = getStringWithoutSequentialChars(password);
//         }

//         if (noSimilarChars) {
//             password = password.replaceAll(/[ilI1LoO0]/g, Include.NoSimilarChars[getFactor(password)]);
//         }

//         passwordsArray.push(password);
//     }

//     return passwordsArray;
// };

// console.log(
//     generatePassword({
//         length: 16,
//         quantity: 1,
//         includeNumbers: true,
//         includeLowerCaseChars: true,
//         includeUpperCaseChars: true,
//         includeSymbols: true,
//         noSimilarChars: true,
//         noSequentialChars: true,
//         noDuplicatesChars: true,
//         dontBeginWithANumberOrSymbol: true,
//     }),
// );
