import { Alphabet } from './data';
import { getRandomCharFromString } from './getRandomCharFromString';
import { GetStringWithoutSequentialCharsType } from '../index.types';

/**
 * @description Get string without sequential chars
 */
export const getStringWithoutSequentialChars: GetStringWithoutSequentialCharsType = (str) => {
    return str
        .split('')
        .map((char, index, array) => {
            if (Number.isInteger(Number(array[index])) && Number.isInteger(Number(array[index + 1]))) {
                if (Number(array[index]) + 1 === Number(array[index + 1])) {
                    return getRandomCharFromString(Alphabet.AllChars());
                }
            }

            return char;
        })
        .join('');
};
