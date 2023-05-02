import { Alphabet, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
/**
 * @description Get string without duplicates
 */
export const getStringWithoutDuplicates = (str) => {
    return str.replaceAll(RegExps.Duplicates, () => Alphabet.AllChars()[getRandomNumber(Alphabet.AllChars().length)] +
        Alphabet.AllChars()[getRandomNumber(Alphabet.AllChars().length)]);
};
//# sourceMappingURL=getStringWithoutDuplicates.js.map