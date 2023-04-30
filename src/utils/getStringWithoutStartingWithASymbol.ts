import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutStartWithASymbolType } from '../index.types';

/**
 * @description Get string without begin symbol
 */
export const getStringWithoutStartingWithASymbol: GetStringWithoutStartWithASymbolType = (str) => {
    return str.replace(str[0], getRandomCharFromString(Alphabet.LowersChars));
};
