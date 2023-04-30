import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutStartingWithANumberType } from '../index.types';

/**
 * @description Get string without start with a number
 */
export const getStringWithoutStartingWithANumber: GetStringWithoutStartingWithANumberType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Alphabet.LowersChars));
};
