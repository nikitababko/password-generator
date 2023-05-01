import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import type { GetStringWithoutStartWithASymbolType } from '../index.types';
import { FIRST_ELEMENT } from '../constants';

/**
 * @description Get string without begin symbol
 */
export const getStringWithoutStartingWithASymbol: GetStringWithoutStartWithASymbolType = (str) => {
    return str.replace(str.at(FIRST_ELEMENT) ?? '', getRandomCharFromString(Alphabet.LowersChars));
};
