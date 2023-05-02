import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import type { GetStringWithoutStartingWithANumberType } from '../index.types';
import { FIRST_ELEMENT } from '../constants';

/**
 * @description Get string without start with a number
 */
export const getStringWithoutStartingWithANumber: GetStringWithoutStartingWithANumberType = (str) => {
    return str.replace(
        str.at(FIRST_ELEMENT) ?? '',
        getRandomCharFromString(`${Alphabet.LowerChars}${Alphabet.UpperChars}`),
    );
};
