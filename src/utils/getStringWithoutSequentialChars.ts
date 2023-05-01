import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import type { GetStringWithoutSequentialCharsType } from '../index.types';
import { NEXT_CHAR } from '../constants';

/**
 * @description Get string without sequential chars
 */
export const getStringWithoutSequentialChars: GetStringWithoutSequentialCharsType = (str) => {
    return str
        .split('')
        .map((char, index, array) => {
            if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + NEXT_CHAR]))) {
                if (Number(array[index]) + NEXT_CHAR === Number(array[index + NEXT_CHAR])) {
                    return getRandomCharFromString(Alphabet.AllChars());
                }
            }

            return char;
        })
        .join('');
};
