import { Alphabet, RegExps } from './data';
import { getRandomNumber } from './getRandomNumber';
import { GetStringWithoutSimilarCharsType } from '../index.types';

/**
 * @description Get string without similar chars
 */
export const getStringWithoutSimilarChars: GetStringWithoutSimilarCharsType = (str) => {
    return str.replaceAll(
        RegExps.SimilarChars,
        () => Alphabet.WithoutSimilarChars[getRandomNumber<string>(Alphabet.WithoutSimilarChars)],
    );
};
