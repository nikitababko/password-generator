import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import type { GetStringWithoutStartingWithASymbolType } from '../index.types';
import { FIRST_ELEMENT } from '../constants';

/**
 * @description Get string without begin symbol
 */
export const getStringWithoutStartingWithASymbol: GetStringWithoutStartingWithASymbolType = (str) => {
    return str.replace(
        str.at(FIRST_ELEMENT) ?? '',
        getRandomCharFromString(`${Alphabet.LowerChars}${Alphabet.UpperChars}`),
    );
};
