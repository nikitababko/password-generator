import { Alphabet, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
/**
 * @description Get string without similar chars
 */
export const getStringWithoutSimilarChars = (str) => {
    return str.replaceAll(RegExps.SimilarChars, () => Alphabet.WithoutSimilarChars[getRandomNumber(Alphabet.WithoutSimilarChars)]);
};
//# sourceMappingURL=getStringWithoutSimilarChars.js.map