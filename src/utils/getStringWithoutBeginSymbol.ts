import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutBeginSymbolType } from '../index.types';

/**
 * @description Get string without begin symbol
 */
export const getStringWithoutBeginSymbol: GetStringWithoutBeginSymbolType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Alphabet.LowersChars));
};
