import { Alphabet, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
/**
 * @description Get string without ambiguous chars
 */
export const getStringWithoutAmbiguousChars = (str) => {
    return str.replaceAll(RegExps.AmbiguousChars, () => Alphabet.WithoutAmbiguousChars[getRandomNumber(Alphabet.WithoutAmbiguousChars)]);
};
//# sourceMappingURL=getStringWithoutAmbiguousChars.js.map