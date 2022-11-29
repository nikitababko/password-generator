import { Include } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutBeginNumberType } from '../index.types';

/**
 * @description Get string without begin number
 */
export const getStringWithoutBeginNumber: GetStringWithoutBeginNumberType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Include.LowersChars));
};
