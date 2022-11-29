import { Include } from './data';
import { getRandomNumber } from './getRandomNumber';
import { GetStringWithoutSimilarCharsType } from '../index.types';

/**
 * @description Get string without similar chars
 */
export const getStringWithoutSimilarChars: GetStringWithoutSimilarCharsType = (str) => {
    return str.replaceAll(/[ilI1LoO0]/g, () => Include.NoSimilarChars[getRandomNumber<string>(Include.NoSimilarChars)]);
};
